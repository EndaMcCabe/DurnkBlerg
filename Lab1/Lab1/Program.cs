using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World");
            Console.WriteLine("Press enter to continue");
            Console.ReadKey();
            //return 0;

            
            //accept student name
            Console.WriteLine("Please enter name");
            string studentName = Console.ReadLine();

            Console.WriteLine("Please enter number of grades:");
            string noGrades = Console.ReadLine();
            int iNoGrades = Int32.Parse(noGrades);

            //Accept marks
            string[] marksArray = new string[iNoGrades];
            int iMark;

            for (var i = 0; i < iNoGrades; i++)
            {
                do
                {
                    
                    Console.Write("Please enter result: " + (i+1) + ": ");
                    marksArray[i] = Console.ReadLine();
                    iMark = Int32.Parse(marksArray[i]);
                } while ((iMark > 100)||(iMark < 0));
            }

            //print out message
            Console.WriteLine("\n-----------------");
            Console.WriteLine("Grades");
            Console.WriteLine("-------------------------");
            foreach (var m in marksArray)
            {
                //add conditional check pass/fail
                Console.WriteLine(m);
            }

            Console.WriteLine("Press any key to exit");
            Console.ReadKey();

          



        }

    }
}
