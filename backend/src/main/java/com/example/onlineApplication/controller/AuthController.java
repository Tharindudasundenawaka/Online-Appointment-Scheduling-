package com.example.onlineApplication.controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.onlineApplication.Repo.UserRepo;
import com.example.onlineApplication.model.LoginRequest;
import com.example.onlineApplication.model.UserData;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private UserRepo userRepository;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

		Optional<UserData> userOptional = userRepository.findByUsername(loginRequest.getUsername());

		if (!userOptional.isPresent()) {
			return ResponseEntity.badRequest().body("User not found");
		}

		UserData user = userOptional.get();

		if (!user.getPassword().equals(loginRequest.getPassword())) {
			return ResponseEntity.badRequest().body("Invalid password");
		}

		return ResponseEntity.ok("Login successful");
	}
}
