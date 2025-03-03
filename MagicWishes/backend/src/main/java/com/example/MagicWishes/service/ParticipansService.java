package com.example.MagicWishes.service;

import com.example.MagicWishes.model.Participans;
import com.example.MagicWishes.repository.ParticipansRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParticipansService {

    private final ParticipansRepository participansRepository;
    public ParticipansService(ParticipansRepository participansRepository) {
        this.participansRepository = participansRepository;
    }

    public Participans addParticipans(Participans participans) {
        return participansRepository.save(participans);
    }

    public List<Participans> findAllParticipansByUserId(Long userId) {
        return participansRepository.findByUserId(userId);
    }

    public List<Participans> findAllParticipansBySecretSantaId(Long santaId) {
        return participansRepository.findAllParticipansBySecretSantaId(santaId);
    }


}
