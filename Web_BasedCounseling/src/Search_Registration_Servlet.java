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
@WebServlet("/Search_Registration_Servlet")
public class Search_Registration_Servlet extends HttpServlet {
	Connection con;
	PreparedStatement pst;
	public void init()
	{
		try
		{
			DriverManager.registerDriver(new net.ucanaccess.jdbc.UcanaccessDriver());
			con=DriverManager.getConnection("jdbc:ucanaccess://D:/Project_web_counseling/Registration_std.accdb");
		}catch(Exception e)
		{
			System.out.println("i got error at init method");
		}
	}
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/plain");
		System.out.println(request.getParameter("hallticket"));
		String hallticket=request.getParameter("hallticket");
		PrintWriter pw=response.getWriter();
		String val[];
		try
		{
		
			pst=con.prepareStatement("select * from reg_std where hallticket_no="+hallticket,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs=pst.executeQuery();
			ResultSetMetaData rsmd=rs.getMetaData();
			int count=rsmd.getColumnCount();
			val=new String[count];
			while(rs.next())
			{
				for(int i=1;i<=count;i++)
				{
					val[i-1]=rs.getString(i);
				}
				System.out.println(val[0]);
			}
			if(hallticket.equals(val[0]))
			{
			JSONObject obj=new JSONObject();
		    obj.put("hallticketvalue1", new String("***Already Fee Paid***"));
		    pw.print(obj);
		    pw.flush();
			}
}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}

}
