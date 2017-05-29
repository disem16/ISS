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

import com.iss.app.Grade.GradeDTO;
import com.iss.app.Grade.GradeDataStore;



@Path("v1/grade")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Service
public class GradeRestService {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserRestService.class);
	private ClassPathXmlApplicationContext context;
	private GradeDataStore gradeDataStore;
	
	public GradeRestService() {
		super();
	}

	private ClassPathXmlApplicationContext getContext() {

		if (context == null) {
			context = new ClassPathXmlApplicationContext("applicationContext.xml");

		}

		return context;
	}

	public GradeDataStore getGradeDataStore() {
		if (gradeDataStore == null)
			gradeDataStore = (GradeDataStore) getContext().getBean("gradeDataStore");
		return gradeDataStore;
	}
	@GET
	@Path("/getGrades")
	@Produces(MediaType.APPLICATION_JSON)
	public List<GradeDTO> getGrade() {
		List<GradeDTO> userList = getGradeDataStore().getGrades();
		return userList;
	}

}
