package com.example.MagicWishes.service;

import com.example.MagicWishes.model.SecretSanta;
import com.example.MagicWishes.repository.SecretSantaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecretSantaService {
    private final SecretSantaRepository secretSantaRepository;

    @Autowired
    public SecretSantaService(SecretSantaRepository secretSantaRepository) {
        this.secretSantaRepository = secretSantaRepository;
    }

    public SecretSanta save(SecretSanta secretSanta) {
        return secretSantaRepository.save(secretSanta);
    }

    public SecretSanta findById(Long id) {
        return secretSantaRepository.findById(id).orElse(null);
    }


}
