package com.example.MagicWishes.service;

import com.example.MagicWishes.model.WhoToWho;
import com.example.MagicWishes.repository.WhoToWhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WhoToWhoService {

    private final WhoToWhoRepository repository;

    @Autowired
    public WhoToWhoService(WhoToWhoRepository repository) {
        this.repository = repository;
    }

    public WhoToWho save(WhoToWho whoToWho) {
        return repository.save(whoToWho);
    }

   public WhoToWho findByUserId1AndSecretSantaId(Long userId1, Long secretSantaId) {
        return repository.findByUserId1AndSecretSantaId(userId1, secretSantaId);
   }

}
