package com.example.onlineApplication.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.onlineApplication.model.UserData;

@Repository
public interface UserRepo extends JpaRepository<UserData, Integer> {
	UserData save(String user);

	Optional<UserData> findByUsername(String username);
}
