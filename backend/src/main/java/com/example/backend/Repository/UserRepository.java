package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.User;

public interface UserRepository extends JpaRepository<User,Long>{ }
