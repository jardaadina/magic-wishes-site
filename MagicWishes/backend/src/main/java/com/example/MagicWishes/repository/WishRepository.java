package com.example.MagicWishes.repository;

import com.example.MagicWishes.model.Wish;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishRepository extends JpaRepository<Wish, Long> {
    List<Wish> findAllByUserId(Long userId);
}
