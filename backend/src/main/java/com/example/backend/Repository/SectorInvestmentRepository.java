package com.example.backend.Repository;

import com.example.backend.model.SectorInvestment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SectorInvestmentRepository extends JpaRepository<SectorInvestment, Long> {
}
