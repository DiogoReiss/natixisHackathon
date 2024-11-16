package com.example.backend.Repository;

import com.example.backend.model.Investments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestmentsRepository extends JpaRepository<Investments, Long> {
}
