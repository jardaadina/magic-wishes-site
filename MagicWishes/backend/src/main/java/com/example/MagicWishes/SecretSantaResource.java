package com.example.MagicWishes;

import com.example.MagicWishes.model.SecretSanta;
import com.example.MagicWishes.service.SecretSantaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/secret-santa")
public class SecretSantaResource {
    private final SecretSantaService secretSantaService;
    public SecretSantaResource(SecretSantaService secretSantaService) {
        this.secretSantaService = secretSantaService;
    }

    @PostMapping("/add")
    public ResponseEntity<SecretSanta> addSecretSanta(@RequestBody SecretSanta secretSanta) {
        SecretSanta newSecretSanta = secretSantaService.save(secretSanta);
        return new ResponseEntity<>(newSecretSanta, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<SecretSanta> findSecretSantaById(@PathVariable("id") Long id) {
        SecretSanta secretSanta = secretSantaService.findById(id);
        return new ResponseEntity<>(secretSanta, HttpStatus.OK);
    }
}
