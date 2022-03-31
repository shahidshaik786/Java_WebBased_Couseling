import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
@WebServlet("/Search_Servlet2")
public class Search_Servlet2 extends HttpServlet 
{
	Connection con;
	PreparedStatement pst;
	public void init()
	{
		try
		{
			DriverManager.registerDriver(new net.ucanaccess.jdbc.UcanaccessDriver());
			con=DriverManager.getConnection("jdbc:ucanaccess://D:/Project_web_counseling/student.accdb");
		}catch(Exception e)
		{
			System.out.println("i got error at init method");
		}
	}
	public int doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		response.setContentType("text/plain");
		System.out.println(request.getParameter("hallticket"));
		String hallticket=request.getParameter("hallticket");
		PrintWriter pw=response.getWriter();
		String val[];
		try
		{
			if(hallticket=="")
			{
				JSONObject obj1=new JSONObject();
			    obj1.put("error", new String("Please Enter a valid Number"));
			    obj1.put("hallticketvalue", new String(""));
			    obj1.put("rank",new String(""));
			    obj1.put("name",new String(""));
			    obj1.put("dob",new String(""));
			    obj1.put("gender",new String(""));
			    obj1.put("catagiry",new String(""));
			    pw.print(obj1);
			    pw.flush();
			}else{
			pst=con.prepareStatement("select * from std_dbase where hallticket_no="+hallticket,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs=pst.executeQuery();
			ResultSetMetaData rsmd=rs.getMetaData();
			int count=rsmd.getColumnCount();
			val=new String[count];
			if(rs.next()==false)
			{
				JSONObject obj1=new JSONObject();
			    obj1.put("error", new String("Please Enter a valid Number"));
			    obj1.put("hallticketvalue", new String(""));
			    obj1.put("rank",new String(""));
			    obj1.put("name",new String(""));
			    obj1.put("dob",new String(""));
			    obj1.put("gender",new String(""));
			    obj1.put("catagiry",new String(""));
			    pw.print(obj1);
			    pw.flush();
			}else{
				pst=con.prepareStatement("select * from std_dbase where hallticket_no="+hallticket,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);
				rs=pst.executeQuery();
				rsmd=rs.getMetaData();
				count=rsmd.getColumnCount();
				val=new String[count];
			while(rs.next())
			{
				for(int i=1;i<=count;i++)
				{
					val[i-1]=rs.getString(i);
				}
				JSONObject obj=new JSONObject();
			    obj.put("hallticketvalue", new String(val[1]));
			    obj.put("rank",new String(val[2]));
			    obj.put("name",new String(val[3]));
			    obj.put("dob",new String(val[4]));
			    obj.put("gender",new String(val[5]));
			    obj.put("catagiry",new String(val[6]));
			    obj.put("error", new String(""));
			    pw.print(obj);
			    pw.flush();
			}
		}
	}
}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
		return 0;
	}

}
