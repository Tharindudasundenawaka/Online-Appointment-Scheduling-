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
import com.example.onlineApplication.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;

	@GetMapping("/users")
	public List<UserData> getAllUsers() {
		return adminService.getAllUsers();
	}

	@GetMapping("/users/{id}")
	public UserData getUserById(@PathVariable int id) {
		return adminService.getUserById(id);
	}

	@PostMapping("/users")
	public UserData createUser(@RequestBody UserData user) {
		return adminService.createUser(user);
	}

	@PutMapping("/users/{id}")
	public UserData updateUser(@PathVariable int id, @RequestBody UserData user) {
		return adminService.updateUser(id, user);
	}

	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable int id) {
		adminService.deleteUser(id);
	}

}

