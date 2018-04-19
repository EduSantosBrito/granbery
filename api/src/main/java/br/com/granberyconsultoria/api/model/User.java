package br.com.granberyconsultoria.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_USER")
public class User {
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name="EMAIL")
	private String email;

	@Column(name="PASSWORD")
	private String password;
	
	@Column(name="PERMISSION_TYPE")
	private Integer permissionType;
	
	@Column(name="IS_ACTIVE")
	private Boolean isActive;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getPermissionType() {
		return permissionType;
	}

	public void setPermissionType(Integer permissionType) {
		this.permissionType = permissionType;
	}

	public Boolean isActive() {
		return isActive;
	}

	public void setActive(Boolean active) {
		this.isActive = active;
	}
	
	

}
