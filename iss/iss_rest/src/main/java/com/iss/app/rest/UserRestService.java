package com.iss.app.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.http.HttpStatus;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.iss.app.Conference.ConferenceDTO;
import com.iss.app.Proposal.ProposalDTO;
import com.iss.app.Rest.DConference;
import com.iss.app.Rest.PProposal;
import com.iss.app.Rest.PUserData;
import com.iss.app.Rest.UserLogin;

import com.iss.app.User.UserDTO;
import com.iss.app.User.UserDataStore;


@Path("v1/user")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Service
public class UserRestService {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserRestService.class);
	private ClassPathXmlApplicationContext context;
	private UserDataStore userDataStore;
	
	public UserRestService() {
		super();
	}

	private ClassPathXmlApplicationContext getContext() {

		if (context == null) {
			context = new ClassPathXmlApplicationContext("applicationContext.xml");

		}

		return context;
	}

	public UserDataStore getUserDataStore() {
		if (userDataStore == null)
			userDataStore = (UserDataStore) getContext().getBean("userDataStore");
		return userDataStore;
	}

	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<UserDTO> getAllUser() {
		List<UserDTO> userList = getUserDataStore().getUsers();
		return userList;
	}
	@POST
	@Path("/getoneuser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public LoginService findUser(UserLogin user) {
		// here i need to split a stringified JSON and get name element!!!
		// now it's hardcoded to nomi
		// !!!!!!!!!!!!!!!!!!

		// String password = user.split("-")[1];
		// String username = user.split("-")[0];
		// String title = null;

		LoginService log = new LoginService();
		UserDTO userLog = getUserDataStore().getn(user.getName());
		if (user.getPassword().equals(userLog.getPassword()))
			{
				LOGGER.info(user.getName() + "    " + user.getPassword() + "============================================");
				
				LOGGER.info(userLog + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
				System.out.println("1");
				LOGGER.info(userLog.getIduser() + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
				System.out.println("2");
				System.out.println("este oare diferit de 0? "+userLog.getIduser());
				if (userLog.getIduser()!=0)
				{
					System.out.println("3");
					log.setResponse(true);
					log.setTitle(userLog.getAccessLevel().getLevelName());
					return log;
				}

			}
			log.setResponse(false);
			return log;
		
	}
	@GET
	@Path("getUserData/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public PUserData getUserData(@PathParam("username") String username){
		PUserData pud = new PUserData();
		UserDTO ud = getUserDataStore().getn(username);
		pud.setName(ud.getName());
		pud.setAddress(ud.getAddress());
		pud.setMaddress(ud.getMaddress());
		pud.setPhoto(ud.getPhoto());
		pud.setNationality(ud.getNationality());
		pud.setMobile(ud.getMobile());
		return pud;
		
	}
	@GET
	@Path("/getConferences")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DConference> getAllConferences() {
		List<DConference> cList=new ArrayList<>() ;
		
		ConferenceRestService crs= new ConferenceRestService();
		List<ConferenceDTO> conf =crs.getConferenceDataStore().getConferences();
		List<String> lista=new ArrayList<>();
		int ok=0;
		DConference test=new DConference();
		for(ConferenceDTO c: conf)
		{
			ok=0; //presupun ca nu exista
			DConference adaugare =new DConference();
			for(DConference d:cList)
				if(d.getConference().equals(c.getType()))
				{
					ok=1;
					test=d;
				}
			if(ok==0)
			{
				adaugare.setConference(c.getType());
				adaugare.setDeadline(c.getDeadline());
				lista=new ArrayList<>() ;
				lista.add(c.getUser().getUsername());
				adaugare.setUserList(lista);
				cList.add(adaugare);
				
			}
			else
			{
				lista=test.getUserList();
				lista.add(c.getUser().getUsername());
				test.setUserList(lista);
			}
				
		}
		return cList;
	}
	@GET
	@Path("/getConferences/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DConference> getAllConference(@PathParam("username") String username) {
		List<DConference> cList=new ArrayList<>() ;
		List<DConference> conf = getAllConferences();
		for (DConference d :conf)
		{
			for(String s:d.getUserList())
				if(s.equals(username))
				{
					cList.add(d);
				}
			
		}
		
		return cList;
	}
	@GET
	@Path("/getC/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DConference> getAllConferences(@PathParam("username") String username) {
		int ok=0;
		//toate conferintele la care userul nu se gaseste
		List<DConference> cList=new ArrayList<>() ;
		List<DConference> conf = getAllConferences();
		for (DConference d :conf)
		{
			ok=0;
			for(String s:d.getUserList())
				if(s.equals(username))
				{
					ok=1;
				}
			if (ok==0)
				cList.add(d);
			
		}
		
		return cList;
	}
	@GET
	@Path("/getProposals/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<PProposal> getProposals(@PathParam("username") String username) {
		List<PProposal> proposals=new ArrayList<>() ;
		ProposalRestService prs= new ProposalRestService();
		List<ProposalDTO> prop=prs.getProposalDataStore().getProposals();
		for (ProposalDTO p:prop)
			if(p.getUser().getUsername().equals(username))
			{
				PProposal pp=new PProposal();
				pp.setId(p.getIdproposal());
				pp.setUser(p.getUser().getUsername());
				if(p.getUserReviewer()!=null)
					pp.setUserReviewer(p.getUserReviewer().getUsername());
				pp.setDocument(p.getDocument());
				pp.setDomain(p.getDomain());
				pp.setName(p.getName());
				pp.setAveragemark(p.getAveragemark());
				proposals.add(pp);
			}
		
		
		return proposals;
	}
	@POST
	@Path("/addConference")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addConference(DConference conf)
	{
		//sa verific sa nu se adauge doua conferinte
		ConferenceRestService crs=new ConferenceRestService();
		List<String> lista=new ArrayList<>();
		ConferenceDTO c= new ConferenceDTO();
		c.setDeadline(conf.getDeadline());
		c.setType(conf.getConference());
		lista=conf.getUserList();
		UserDTO u=new UserDTO();
		UserDataStore uds=new UserDataStore();
		u=getUserDataStore().getn(lista.get(0));
		c.setUser(uds.map(u));
		crs.getConferenceDataStore().save(c);
		return Response.status(HttpStatus.CREATED.value()).build();
		
	}
	@POST
	@Path("/deleteConference")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteConference(DConference conf)
	{
		//sa verific sa nu se adauge doua conferinte
		ConferenceRestService crs=new ConferenceRestService();
		//ConferenceDTO c= new ConferenceDTO();
		//c.setDeadline(conf.getDeadline());
		//c.setType(conf.getConference());
		
		List<ConferenceDTO> conferences=crs.getConferenceDataStore().getConferences();
		for(ConferenceDTO co:conferences)
			if(co.getType().equals(conf.getConference()))
					crs.getConferenceDataStore().delete(co);
		return Response.status(HttpStatus.CREATED.value()).build();
		
	}
	

}
