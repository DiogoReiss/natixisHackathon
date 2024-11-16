package com.example.backend.Repository;

import com.example.backend.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
    @Query("SELECT s.name AS sectorName, i.name AS investmentName FROM Portfolio p " +
            "JOIN p.sectorInvestment si " +
            "JOIN si.sector s " +
            "JOIN si.investment i " +
            "WHERE p.user.id = :userId " +
            "GROUP BY s.name, i.name")
    List<Object[]> findSectorAndInvestmentByUserId(@Param("userId") Long userId);

}
