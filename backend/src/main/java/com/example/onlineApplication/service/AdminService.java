package com.example.onlineApplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onlineApplication.Repo.UserRepo;
import com.example.onlineApplication.model.UserData;

@Service
public class AdminService {
	@Autowired
	private UserRepo userRepository;

	public List<UserData> getAllUsers() {
		return userRepository.findAll();
	}

	public UserData getUserById(int id) {
		Optional<UserData> user = userRepository.findById(id);
		return user.orElse(null);
	}

	public UserData createUser(UserData user) {
		return userRepository.save(user);
	}

	public UserData updateUser(int id, UserData updatedUser) {
		Optional<UserData> existingUserOptional = userRepository.findById(id);

		if (existingUserOptional.isPresent()) {
			UserData existingUser = existingUserOptional.get();
			existingUser.setUsername(updatedUser.getUsername());
			existingUser.setEmail(updatedUser.getEmail());
			existingUser.setPassword(updatedUser.getPassword());

			return userRepository.save(existingUser);
		} else {

			return null;
		}
	}

	public void deleteUser(int id) {
		userRepository.deleteById(id);
	}
}
