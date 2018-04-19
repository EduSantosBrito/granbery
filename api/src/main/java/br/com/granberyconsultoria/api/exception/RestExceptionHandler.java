package br.com.granberyconsultoria.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(UnauthorizedException.class)
	protected ResponseEntity<Object> handleUnauthorized() {
		String error = "Não autorizado. Tente realizar o login novamente.";
		return buildResponseEntity(new GenericException(HttpStatus.UNAUTHORIZED, error));
	}
	
	@ExceptionHandler(WrongCredentialsException.class)
	protected ResponseEntity<Object> handleWrongCredentials() {
		String error = "Falha na autenticação. Verifique suas credenciais e tente novamente.";
		return buildResponseEntity(new GenericException(HttpStatus.UNAUTHORIZED, error));
	}
	
	@ExceptionHandler(OffWorkerException.class)
	protected ResponseEntity<Object> handleOffWorker(){
		String error = "Membro desligado. Contate a empresa para mais informações.";
		return buildResponseEntity(new GenericException(HttpStatus.UNAUTHORIZED, error));
	}

	private ResponseEntity<Object> buildResponseEntity(GenericException genericException) {
		return new ResponseEntity<>(genericException, genericException.getStatusText());
	}
}
