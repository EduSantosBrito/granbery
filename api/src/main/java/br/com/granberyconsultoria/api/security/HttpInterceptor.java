package br.com.granberyconsultoria.api.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import br.com.granberyconsultoria.api.exception.UnauthorizedException;


@Component
public class HttpInterceptor implements HandlerInterceptor{
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object object) throws Exception {
		String user = TokenAuthenticationService.getAuthentication(request);
		if(user == null) {
			throw new UnauthorizedException();
		}
		//TODO Criar atributo TIPO_USUARIO, para tipos de permissão (admin, criador de conteudo, etc.)
		return true;
	}
	

}
