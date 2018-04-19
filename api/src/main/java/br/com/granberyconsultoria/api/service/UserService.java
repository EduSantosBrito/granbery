package br.com.granberyconsultoria.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.granberyconsultoria.api.exception.OffWorkerException;
import br.com.granberyconsultoria.api.exception.WrongCredentialsException;
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
	
	public ResponseEntity<Object> findByEmailAndPassword(User user) {
		User account = this.userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if(account != null) {
			if(account.isActive()) {
				return createToken(account);
			}
			throw new OffWorkerException();
		}
		throw new WrongCredentialsException();
	}
	private ResponseEntity<Object> createToken(User account) {
		return new ResponseEntity<>(TokenAuthenticationService.addAuthentication(account.getPermissionType().toString()), HttpStatus.OK);
	}
	
}
