package com.example.onlineApplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class RoleData {
	@Id
	private int id;
	private String name;

	public RoleData(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public RoleData() {
		super();
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


}
