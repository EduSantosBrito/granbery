package br.com.granberyconsultoria.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.granberyconsultoria.api.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmailAndPassword(String email, String password);
}
