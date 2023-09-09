package com.example.onlineApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.onlineApplication.model.UserData;
import com.example.onlineApplication.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping
	public List<UserData> getAllUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/{id}")
	public UserData getUserById(@PathVariable int id) {
		return userService.getUserById(id);
	}

	@PostMapping
	public UserData createUser(@RequestBody UserData user) {
		return userService.createUser(user);
	}

	@PutMapping("/{id}")
	public UserData updateUser(@PathVariable int id, @RequestBody UserData user) {
		return userService.updateUser(id, user);
	}

	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
	}

}

