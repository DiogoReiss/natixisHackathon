package com.example.backend.Repository;

import com.example.backend.model.Sector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SectorRepository extends JpaRepository<Sector, Long> {
}
