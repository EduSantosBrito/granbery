package br.com.granberyconsultoria.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.granberyconsultoria.api.model.User;
import br.com.granberyconsultoria.api.service.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;

	@GetMapping
	public List<User> getUsers() {
		return this.userService.findAll();
	}
	
	@PostMapping("login")
	public ResponseEntity<Object> login(@RequestBody User user) {
		return this.userService.findByEmailAndPassword(user);
	}
	
}
