package br.com.granberyconsultoria.api.exception;

import org.springframework.http.HttpStatus;

public class GenericException {
	
	private String message;
	private HttpStatus status;
	private Integer statusCode;
	
	public GenericException(HttpStatus status, String message) {
		this.status = status;
		this.message = message;
		this.statusCode = status.value();
	}

	public String getMessage() {
		return message;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public Integer getStatusCode() {
		return statusCode;
	}
	
	

}
