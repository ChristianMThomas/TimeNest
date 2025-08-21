package com.example.Mind_Forge.controller;

import com.example.Mind_Forge.dto.timelog.CreateTimeLogDto;
import com.example.Mind_Forge.dto.timelog.UpdateTimeLogDto;
import com.example.Mind_Forge.model.TimeLog;
import com.example.Mind_Forge.response.TimeLogResponse;
import com.example.Mind_Forge.service.TimeLogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/timelogs")
public class TimeLogController {

    private final TimeLogService timeLogService;

    public TimeLogController(TimeLogService timeLogService) {
        this.timeLogService = timeLogService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TimeLogResponse> getTimeLogById(@PathVariable Long id) {
        TimeLog log = timeLogService.getTimeLogById(id);
        return ResponseEntity.ok(TimeLogResponse.fromEntity(log));
    }

    @GetMapping("/me")
    public ResponseEntity<List<TimeLogResponse>> getMyTimeLogs() {
        List<TimeLogResponse> response = timeLogService.displayUserTimeLogs().stream()
                .map(TimeLogResponse::fromEntity)
                .toList();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<List<TimeLogResponse>> getTimeLogsByLocation(@PathVariable String location) {
        List<TimeLogResponse> response = timeLogService.displayTimeLogsByLocation(location).stream()
                .map(TimeLogResponse::fromEntity)
                .toList();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<TimeLogResponse>> getTimeLogsByCompany(@PathVariable Long companyId) {
        List<TimeLogResponse> response = timeLogService.getTimeLogsByCompany(companyId).stream()
                .map(TimeLogResponse::fromEntity)
                .toList();
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<TimeLogResponse> createTimeLog(@RequestBody CreateTimeLogDto timeLogDto) {
        TimeLog created = timeLogService.createTimeLog(timeLogDto);
        return ResponseEntity.ok(TimeLogResponse.fromEntity(created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TimeLogResponse> updateTimeLog(@PathVariable Long id, @RequestBody UpdateTimeLogDto timeLogDto) {
        TimeLog updated = timeLogService.updateTimeLog(id, timeLogDto);
        return ResponseEntity.ok(TimeLogResponse.fromEntity(updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTimeLog(@PathVariable Long id) {
        timeLogService.deleteTimeLog(id);
        return ResponseEntity.noContent().build();
    }
}



// Next time try to get rid off all the cofiguration in secuirtyfilter and restrict acess to routes in controller