import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/Selection_Servlet")
public class Selection_Servlet extends HttpServlet 
{
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		try
		{
				RequestDispatcher rd;
				java.util.Date d=new java.util.Date();
		    	int day=d.getDate();
		    	int mon=d.getMonth();
		    	int month=mon+1;
		    	int y=d.getYear();
		    	int year=y+1900;
		    	String date=""+day+"/"+month+"/"+year;
				response.setContentType("text/html");
				String hallticket_no=request.getParameter("reghallticket");
				String rank_no=request.getParameter("regrank");
				String std_name=request.getParameter("regname");
				String std_dob=request.getParameter("regdob");
				String std_gender=request.getParameter("reggender");
				String std_catagiry=request.getParameter("regcatagiry");
				String std_college=request.getParameter("college");
				String std_course=request.getParameter("course");
				System.out.println(hallticket_no+" "+rank_no+" "+std_name+" "+std_dob+" "+std_gender+" "+std_catagiry+" "+std_college+" "+std_course);
				System.out.println(day+" "+month+" "+year);
				DriverManager.registerDriver(new net.ucanaccess.jdbc.UcanaccessDriver());
				Connection con=DriverManager.getConnection("jdbc:ucanaccess://D:/Project_web_counseling/SeatSelection_std.accdb");
				PreparedStatement pst=con.prepareStatement("insert into Seat_dbase values(?,?,?,?,?,?,?,?,?)");
				pst.setString(1, hallticket_no);
				pst.setString(2,rank_no);
				pst.setString(3, std_name);
				pst.setString(4, std_dob);
				pst.setString(5, std_gender);
				pst.setString(6,std_catagiry);
				pst.setString(7,std_college);
				pst.setString(8,std_course);
				pst.setString(9,date);
				int x=pst.executeUpdate();
				if(x==0)
				{
					System.out.println("No records updated");
				}
				else
				{
					System.out.println(x+" records updated");
					rd=request.getRequestDispatcher("./PdfServlet");
					rd.forward(request, response);
				}
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}

}