package co.edu.escuelaing.sparkdockerdemolive;


import static spark.Spark.*;

public class SparkWebServer {

    public static void main(String... args) {
        port(getPort());
        staticFileLocation("/public");
        get("hello", (req, res) -> "Hello Docker!");

        get("sin", (req, res) -> {
            double value = Double.parseDouble(req.queryParams("angle"));
            double sin = Math.sin(value);
            return sin;
        });

        get("cos", (req, res) -> {
            double value = Double.parseDouble(req.queryParams("angle"));
            double cos = Math.cos(value);
            return "Cos of " + value + " is " + cos;
        });

        get("palindrome", (req, res) -> {
            String value = req.queryParams("ispalindrome");
            String theOtherWay = new StringBuffer(value).reverse().toString();
            if (value.equals(theOtherWay)) {
                return value + " is a palindrome";
            }
            return value + " is not a palindrome";
        });

        get("magnitude", (req, res) -> {
            double firstValue = Double.parseDouble(req.queryParams("a"));
            double secondValue = Double.parseDouble(req.queryParams("b"));
            double magnitude = Math.hypot(firstValue, secondValue);
            return magnitude;
        });



    }

    private static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 4567;
    }
    
}