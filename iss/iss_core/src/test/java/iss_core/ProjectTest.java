package iss_core;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.iss.app.User.User;
import com.iss.app.User.UserRepository;



public class ProjectTest {
	@Before
	public void setUp() throws Exception {
	}

	@Test//(expected=NullPointerException.class)
	public void test() {
		
	      /*ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
	    	         "applicationContext.xml");
	      
          FunctieRepository repository = context.getBean( FunctieRepository.class);
	      List<Functie> repositoryList = (List< Functie>)repository.findAll();
	      for (Functie officeData : repositoryList) {
	         System.out.println(officeData.getId() + " ----- " + officeData.getFunctie()+  " -----------\n");
	      }
	      
	      System.out.println("--------Merge--------");
	      
	      context.close();*/
     ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
   	         "applicationContext.xml");
     
     UserRepository repository = context.getBean( UserRepository.class);
     List<User> repositoryList = (List< User>)repository.findAll();
     for (User u : repositoryList) {
        System.out.println(u.getUsername() + " ----- " + u.getAccessLevel().getLevelName()+"---- "+ u.getEmail()+ " -----------\n");
     }
     
     System.out.println("--------Merge--------");
     
     context.close();
		 /*ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
	   	         "applicationContext.xml");
	     
	     UserRepository repository = context.getBean( UserRepository.class);
	     User u=repository.findByUser("doctor", "test");
	     System.out.println(u.getNume()+"------"+u.getUtilizator());
	     
	     context.close();*/
	/*	
	ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
   	         "applicationContext.xml");
     
     ProgramareRepository repository = context.getBean( ProgramareRepository.class);
     List<Programare> repositoryList = (List< Programare>)repository.findAll();
     for (Programare officeData : repositoryList) {
        System.out.println(officeData.getId() + " ----- " + officeData.getOraint()+  " -----------\n");
     }
     
     System.out.println("--------Merge--------");
     
     context.close();*/
	}

}
