package br.com.granberyconsultoria.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.granberyconsultoria.api.model.User;
import br.com.granberyconsultoria.api.repository.UserRepository;
import br.com.granberyconsultoria.api.security.TokenAuthenticationService;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> findAll() {
		return this.userRepository.findAll();
	}
	
	public String findByEmailAndPassword(User user) {
		User account = this.userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		return account != null ? TokenAuthenticationService.addAuthentication(account.getEmail()) : null;
	}
	
}
