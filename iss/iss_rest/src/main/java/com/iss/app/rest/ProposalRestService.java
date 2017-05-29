package com.iss.app.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.iss.app.Proposal.ProposalDTO;
import com.iss.app.Proposal.ProposalDataStore;
import com.iss.app.Rest.PProposal;
import com.iss.app.User.UserDTO;
import com.iss.app.User.UserDataStore;



@Path("v1/proposal")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Service
public class ProposalRestService {
	//private static final Logger LOGGER = LoggerFactory.getLogger(UserRestService.class);
	private ClassPathXmlApplicationContext context;
	private ProposalDataStore proposalDataStore;
	
	public ProposalRestService() {
		super();
	}

	private ClassPathXmlApplicationContext getContext() {

		if (context == null) {
			context = new ClassPathXmlApplicationContext("applicationContext.xml");

		}

		return context;
	}

	public ProposalDataStore getProposalDataStore() {
		if (proposalDataStore == null)
			proposalDataStore = (ProposalDataStore) getContext().getBean("proposalDataStore");
		return proposalDataStore;
	}
	
	@GET
	@Path("/getProposals")
	@Produces(MediaType.APPLICATION_JSON)
	public List<PProposal> getAllProp() {
		List<ProposalDTO> prop=getProposalDataStore().getProposals();
		List<PProposal> proposals=new ArrayList<>() ;
		for(ProposalDTO p:prop)
		{
			PProposal pp=new PProposal();
			pp.setId(p.getIdproposal());
			pp.setDomain(p.getDomain());
			pp.setAveragemark(p.getAveragemark());
			pp.setName(p.getName());
			pp.setUser(p.getUser().getUsername());  //sa pun cu username
			if(p.getUserReviewer()!=null)
				pp.setUserReviewer(p.getUserReviewer().getName());
			pp.setDocument(p.getDocument());
			proposals.add(pp);
		}
		return proposals;
	}
	@POST
	@Path("/addProposal")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addProposal(PProposal pp)
	{
		ProposalDTO p=new ProposalDTO();
		if(pp.getId()!=0)
			p.setIdproposal(pp.getId());
		if(pp.getAveragemark()!=null)
			p.setAveragemark(pp.getAveragemark());
		else
			p.setAveragemark(0);
		p.setDocument(pp.getDocument());
		p.setDomain(pp.getDomain());
		UserRestService urs=new UserRestService();
		UserDTO u=urs.getUserDataStore().getn(pp.getUser());
		UserDTO ur=urs.getUserDataStore().getn("admin");
		UserDataStore uds=new UserDataStore();
		p.setUserReviewer(uds.map(ur));
		p.setUser(uds.map(u));
		p.setName(pp.getName());
		getProposalDataStore().save(p);

		
		return Response.status(HttpStatus.CREATED.value()).build();
	
	}
	@POST
	@Path("/deleteProposal")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteProposal(PProposal pp)
	{
		ProposalDTO p=new ProposalDTO();
		p.setIdproposal(pp.getId());
		p.setAveragemark(pp.getAveragemark());
		p.setDocument(pp.getDocument());
		p.setDomain(pp.getDomain());
		UserRestService urs=new UserRestService();
		UserDTO u=urs.getUserDataStore().getn(pp.getUser());
		UserDataStore uds=new UserDataStore();
		p.setUser(uds.map(u));
		p.setName(pp.getName());
		ProposalDTO ppp= getProposalDataStore().getid(p.getIdproposal());
		getProposalDataStore().delete(ppp);

		
		return Response.status(HttpStatus.CREATED.value()).build();
	
	}


}
