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

import com.iss.app.Conference.ConferenceDataStore;
import com.iss.app.User.UserDTO;



@Path("v1/conference")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Service
public class ConferenceRestService {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserRestService.class);
	private ClassPathXmlApplicationContext context;
	private ConferenceDataStore conferenceDataStore;
	
	public ConferenceRestService() {
		super();
	}

	private ClassPathXmlApplicationContext getContext() {

		if (context == null) {
			context = new ClassPathXmlApplicationContext("applicationContext.xml");

		}

		return context;
	}

	public ConferenceDataStore getConferenceDataStore() {
		if (conferenceDataStore == null)
			conferenceDataStore = (ConferenceDataStore) getContext().getBean("conferenceDataStore");
		return conferenceDataStore;
	}
	

}
