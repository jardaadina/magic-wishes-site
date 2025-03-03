package com.example.MagicWishes.repository;

import com.example.MagicWishes.model.Participans;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParticipansRepository extends JpaRepository<Participans, Long> {

    public List<Participans> findByUserId(Long userId);

    List<Participans> findAllParticipansBySecretSantaId(Long secretSantaId);
}
