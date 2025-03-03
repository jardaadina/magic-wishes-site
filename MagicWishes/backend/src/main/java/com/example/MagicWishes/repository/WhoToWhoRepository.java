package com.example.MagicWishes.repository;

import com.example.MagicWishes.model.WhoToWho;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WhoToWhoRepository extends JpaRepository<WhoToWho, Long> {
    WhoToWho findWhoToWhoByIdAndUserId1(Long id, Long userId1);

    WhoToWho findByUserId1AndSecretSantaId(Long userId1, Long secretSantaId);
}
