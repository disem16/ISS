package com.iss.app.rest;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Provider
public class CorsFilter implements ContainerResponseFilter {
   
   private static final Logger logger = LoggerFactory.getLogger(CorsFilter.class);
   
   public CorsFilter() {
      logger.debug("CorsFilter created");
   }
   
   @Override
   public void filter(ContainerRequestContext request,
                      ContainerResponseContext response) throws IOException {
                      
      // Because apparently * ain't enough...
      String clientOrigin = request.getHeaderString("origin");
      
      response.getHeaders().add("Access-Control-Allow-Origin",
         "http://localhost:3000");
         
      response.getHeaders().add("Access-Control-Allow-Headers",
         "origin, X-HTTP-Method-Override, content-type, accept, authorization");
         
      response.getHeaders().add("Access-Control-Allow-Credentials",
         "true");
         
      response.getHeaders().add("Access-Control-Allow-Methods",
         "GET, POST, PUT, DELETE, OPTIONS, HEAD");
   }
}
