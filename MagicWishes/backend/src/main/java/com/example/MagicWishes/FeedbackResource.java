package com.example.MagicWishes;

import com.example.MagicWishes.model.Feedback;
import com.example.MagicWishes.service.FeedbackService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
public class FeedbackResource {
    private final FeedbackService feedbackService;
    public FeedbackResource(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Feedback>> getAllFeedback() {
        List<Feedback> feedbacks = feedbackService.findAll();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback) {
        feedbackService.add(feedback);
        return new ResponseEntity<>(feedback, HttpStatus.OK);
    }
}
