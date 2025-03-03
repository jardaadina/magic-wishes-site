package com.example.MagicWishes;


import com.example.MagicWishes.model.Participans;
import com.example.MagicWishes.service.ParticipansService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/participans")
public class ParticipansResource {
    private final ParticipansService participansService;


    public ParticipansResource(ParticipansService participansService) {
        this.participansService = participansService;
    }

    @PostMapping("/add")
    public ResponseEntity<Participans> addParticipans(@RequestBody Participans participans) {
        Participans newParticipans = participansService.addParticipans(participans);
        return new ResponseEntity<>(newParticipans, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<List<Participans>> findParticipans(@PathVariable("id") Long id) {
        List<Participans> events = participansService.findAllParticipansByUserId(id);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/findusers/{id}")
    public ResponseEntity<List<Participans>> findParticipansUserIdBySecretSantaId(@PathVariable("id") Long id) {
        List<Participans> ids = participansService.findAllParticipansBySecretSantaId(id);
        return new ResponseEntity<>(ids, HttpStatus.OK);
    }

}
