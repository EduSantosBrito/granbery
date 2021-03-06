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
		String permissionType = TokenAuthenticationService.getAuthentication(request);
		if(permissionType == null || !permissionType.equals("1")) {
			throw new UnauthorizedException();
		}
		return true;
	}
	

}
