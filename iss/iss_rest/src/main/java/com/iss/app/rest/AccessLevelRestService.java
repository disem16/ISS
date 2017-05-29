package com.iss.app.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.iss.app.AccessLevel.AccessLevelDTO;
import com.iss.app.AccessLevel.AccessLevelDataStore;

@Path("v1/al")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Service
public class AccessLevelRestService {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserRestService.class);
	private ClassPathXmlApplicationContext context;
	private AccessLevelDataStore alDataStore;
	
	public AccessLevelRestService() {
		super();
	}

	private ClassPathXmlApplicationContext getContext() {

		if (context == null) {
			context = new ClassPathXmlApplicationContext("applicationContext.xml");

		}

		return context;
	}

	public AccessLevelDataStore getALDataStore() {
		if (alDataStore == null)
			alDataStore = (AccessLevelDataStore) getContext().getBean("alDataStore");
		return alDataStore;
	}
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<AccessLevelDTO> getAL() {
		List<AccessLevelDTO> userList = getALDataStore().getAccesLevel();
		return userList;
	}

}
