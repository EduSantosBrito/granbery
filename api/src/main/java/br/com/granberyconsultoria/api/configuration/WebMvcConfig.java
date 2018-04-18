package br.com.granberyconsultoria.api.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import br.com.granberyconsultoria.api.security.HttpInterceptor;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer  {

	@Autowired
	private HttpInterceptor httpInterceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(httpInterceptor).excludePathPatterns("/users/login");
	}
}
