package com.example.MagicWishes;

import com.example.MagicWishes.model.WhoToWho;
import com.example.MagicWishes.service.WhoToWhoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/who-to-who")
public class WhoToWhoResource {
    private final WhoToWhoService whoToWhoService;

    public WhoToWhoResource(WhoToWhoService whoToWhoService) {
        this.whoToWhoService = whoToWhoService;
    }

    @PostMapping("/add")
    public ResponseEntity<WhoToWho> addWhoToWho(@RequestBody WhoToWho whoToWho) {
        whoToWhoService.save(whoToWho);
        return new ResponseEntity<>(whoToWho, HttpStatus.OK);
    }

    @GetMapping("/find/{id1}/{id2}")
    public ResponseEntity<WhoToWho> findWhoToWho(@PathVariable("id1") Long id1,@PathVariable("id2") Long id2) {
        WhoToWho whoToWho = whoToWhoService.findByUserId1AndSecretSantaId(id1, id2);
        return new ResponseEntity<>(whoToWho, HttpStatus.OK);
    }
}
