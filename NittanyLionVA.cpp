// NittanyLionVA.cpp
//Name:Jonathan Alavez
//Instructor: Gina Mejia
//Course: CMPSC 330

#include <iostream>
#include <string>
#include <cmath>
#include <sstream>   // <-- added for ostringstream
using namespace std;

void medicalQuiz();
void Ex1();
void Ex5();
void Ex6();
void Ex7();
void Ex8();
void Ex9();
void Ex10();
void Ex11();
void Ex14();
void Ex15();
void Ex17();
void Ex18();
void Ex19();
void Ex20();
void Ex21();
void Ex22();
void Ex23();
void Ex24();
void Ex25();
void Ex26();
void Ex27();
void Ex28();
void Ex29();
void Ex30();
void Ex31();
void Ex32();
void Ex33();
void Ex34();
void Ex35();
void Ex36();
void Ex37();
void Ex38();
void Ex39();
void Ex40();
void Ex41();
void Ex42();
void Ex43();
void Ex44();
void Ex45();
void Ex46();
void Ex47();
void Ex48();
void Ex49();
void Ex50();
void Ex51();
void Ex52();
void Ex53();
void Ex54();
void Ex55();
void Ex56();
void Ex57();
void Ex58();
void Ex59();
void Ex60();
void Ex61();
void Ex62();
void Ex63();
void Ex64();
void Ex65();
void Ex66();

const string descriptions[101] = {
    "", // 0 unused
    "Add, subtract , multiply and Divide two numbers", // 1
    "", "", "",
    "Average of two numbers", // 5
    "Check if numbers are even or odd", // 6
    "Check if numbers are positive negative or zero", // 7
    "Calculate square root", // 8
    "Find absolute value", // 9
    "Calculate perimeter and area of a square", // 10
    "Multiplication table of 2", // 11
    "", "", "Find hypotenuse using Pythagoras theorem", // 14
    "Convert dollars to euros and vice-versa", // 15
    "", "Swap two numbers", // 17
    "Find smallest of three numbers", // 18
    "Find largest of three numbers", // 19
    "Sum of squares of two numbers", // 20
    "Find min and max of three numbers", // 21
    "Sum of first 100 positive integers", // 22
    "Sum of first 100 even integers", // 23
    "Solve linear equation", // 24
    "Solve quadratic equation", // 25
    "Sum of first N positive integers", // 26
    "Sum of first N even integers", // 27
    "Convert kilometers and meters", // 28
    "Five question quiz game", // 29
    "T shirt configuration quiz", // 30
    "Sum array elements", // 31
    "Add elements of two arrays", // 32
    "Multiply and divide arrays", // 33
    "Array operations add subtract multiply divide", // 34
    "Multiply array by number", // 35
    "Sum elements of 2x2 matrix", // 36
    "Matrix addition subtraction multiplication", // 37
    "Return greater of two numbers", // 38
    "Return sum of two numbers", // 39
    "Return difference of two numbers", // 40
    "Area of a Triangle", // 41
    "Sum of First 100 Odd Integers", // 42
    "Solve Two Linear Equations (Inverse Matrix Method)", // 43
    "Dollars to Pesos", // 44
    "Pesos to Dollars", // 45
    "Dollars to Yen", // 46
    "Yen to Dollars", // 47
    "Dollars to Rupees", // 48
    "Rupees to Dollars", // 49
    "Fun Game", // 50
    "People class with intro method", // 51
    "Time machine travel and recharge", // 52
    "Virtual pet feed play and status", // 53
    "Taco add salsa and eat", // 54
    "Bake pizza and eat slice", // 55
    "Dog barks and fetches item", // 56
    "Fast food restaurant order and rate", // 57
    "Rectangle area and perimeter", // 58
    "Robot dance and recharge", // 59
    "Superhero use superpower", // 60
    "Monster friendly/scary roar", // 61
    "Treasure unlock and open", // 62
    "Bank account deposit withdraw balance", // 63
    "Employee work and receive raise", // 64
    "Play movie and rate", // 65
    "Simple fighting game attack and status", // 66
    "", "", "", "", "", "", "", "", "", "", // 67–76
    "", "", "", "", "", "", "", "", "", "", // 77–86
    "", "", "", "", "", "", "", "", "", "", // 87–96
    "", "", "", // 97–99
    "Medical quiz depression identifier", // 100
};

int main()
{
    int  readInt(const string & prompt);
    void printExercises(const int arr[], int n);
    bool inList(int ex, const int arr[], int n);
    void callExercise(int ex);

    const int sec1[]  = { 1,5,6,7,17,20 }; // 2 Number Operations
    const int sec2[]  = { 8,9,11 };        // 1 Number Operations
    const int sec3[]  = { 10,14,41 };      // Geometric Operations
    const int sec4[]  = { 18,19,21 };      // 3 numbers analysis
    const int sec5[]  = { 22,23,26,27 };   // Sum of range of Numbers
    const int sec6[]  = { 24,25,42 };      // Equations
    const int sec7[]  = { 15,28,44,45,46,47,48,49 }; // Conversions
    const int sec8[]  = { 29,30,50,100 };  // Quiz Games
    const int sec9[]  = { 31,32,33,34,35 }; // Array operations
    const int sec10[] = { 36,37 };         // Matrix Operations
    const int sec11[] = { 38,39,40 };      // Functions with 2 integers
    const int sec12[] = { 51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66 }; // OOP


    cout << "Welcome to Nittany Lion VA - Your Virtual Assistant for Programming Exercises!\n";
    int count;
    cin >> count;

    cout << "You have entered: " << count << "\n";
    // cout << "[probe] C++ started\n" << flush;

    // // #1: raw char-by-char probe (press Enter to end)
    // cout << "[probe] Type something (end with Enter). I will echo code points:\n" << flush;
    
    // while (true) {
    //     int c = cin.get(); // returns int; -1 means EOF
    //     if (c == '\n' || c == '\r') { cout << "\n[probe] newline detected\n"; break; }
    //     if (c == EOF) { cout << "\n[probe] EOF detected (cin.eof=" << cin.eof() << ")\n"; break; }
    //     cout << "[" << c << "]" << flush;  // show numeric codepoint
    // }

    // // #2: state flags after loop
    // cout << "\n[probe] stream state: good=" << cin.good()
    //      << " fail=" << cin.fail() << " eof=" << cin.eof() << " bad=" << cin.bad() << "\n";

    // // clear fail/eof if any, so next read is clean
    // if (!cin.good()) { cin.clear(); cin.ignore(numeric_limits<streamsize>::max(), '\n'); }

    // // #3: integer read probe
    // cout << "[probe] Enter an integer: " << flush;
    // int x = -999;
    // cin >> ws >> x;  // skip whitespace only
    // cout << "\n[probe] after int read: x=" << x
    //      << " | good=" << cin.good() << " fail=" << cin.fail() << " eof=" << cin.eof() << "\n";



//     while (true) {
//         // ----- BATCHED MAIN MENU (single print) -----
//         cout << R"(
// ==============================
//   Nittany Lion VA — Main Menu
// ==============================
//   1) 2-Number Operations
//   2) 1-Number Operations
//   3) Geometric Operations
//   4) 3-Number Analysis
//   5) Sum of Ranges
//   6) Equations
//   7) Conversions
//   8) Quiz Games
//   9) Array Operations
//  10) Matrix Operations
//  11) Functions (2 integers)
//  12) OOP Mini-Projects
//   0) Exit
// )"<< flush;

//         int section = readInt("Choose a section (0-12): ");
//         if (section == 0) {
//             cout << "Thanks for using Nittany Lion VA. Goodbye!\n";
//             break;
//         }

//         // pick the right list for the section
//         const int* list = nullptr; int n = 0;
//         switch (section) {
//             case 1:  list = sec1;  n = sizeof(sec1)  / sizeof(sec1[0]);  break;
//             case 2:  list = sec2;  n = sizeof(sec2)  / sizeof(sec2[0]);  break;
//             case 3:  list = sec3;  n = sizeof(sec3)  / sizeof(sec3[0]);  break;
//             case 4:  list = sec4;  n = sizeof(sec4)  / sizeof(sec4[0]);  break;
//             case 5:  list = sec5;  n = sizeof(sec5)  / sizeof(sec5[0]);  break;
//             case 6:  list = sec6;  n = sizeof(sec6)  / sizeof(sec6[0]);  break;
//             case 7:  list = sec7;  n = sizeof(sec7)  / sizeof(sec7[0]);  break;
//             case 8:  list = sec8;  n = sizeof(sec8)  / sizeof(sec8[0]);  break;
//             case 9:  list = sec9;  n = sizeof(sec9)  / sizeof(sec9[0]);  break;
//             case 10: list = sec10; n = sizeof(sec10) / sizeof(sec10[0]); break;
//             case 11: list = sec11; n = sizeof(sec11) / sizeof(sec11[0]); break;
//             case 12: list = sec12; n = sizeof(sec12) / sizeof(sec12[0]); break;
//             default:
//                 cout << "That option is not in the menu. Please choose 0-12.\n";
//                 continue;
//         }

//         // show only the valid exercises for that section (BATCHED)
//         printExercises(list, n);

//         int ex = readInt("Pick an exercise from the list (or 0 to go back): ");
//         if (ex == 0) continue;

//         if (!inList(ex, list, n)) {
//             cout << "That exercise doesn't belong to this section. Try again.\n";
//             continue;
//         }

//         // single prints for markers
//         cout << "\nRunning Ex" << ex << " ...\n";
//         cin.ignore();                     // keep your behavior
//         callExercise(ex);
//         cout << "\nCompleted Ex" << ex << "\n";
//     }

    return 0;
}

// ----------------- HELPERS -----------------
int readInt(const string& prompt) {
    int x;
    while (true) {
        cout << prompt << flush;          // flush so prompt shows immediately in WASM console
        if (cin >> x) return x;
        cin.clear();
        cin.ignore(100000, '\n');         // ignore junk/newlines
        cout << "Invalid input - please type a number and press Enter.\n";
    }
}

// BATCHED exercise list (build string once, print once)
void printExercises(const int arr[], int n) {
    ostringstream out;
    out << "Available exercises in this section:\n";
    for (int i = 0; i < n; ++i) {
        int ex = arr[i];
        out << "-" << ex << " - " << descriptions[ex] << '\n';
    }
    out << '\n';
    cout << out.str() << flush;
}

bool inList(int ex, const int arr[], int n) {
    for (int i = 0; i < n; ++i) if (arr[i] == ex) return true;
    return false;
}

void callExercise(int ex) {
    switch (ex) {
        case 1: Ex1(); break;    case 5: Ex5(); break;    case 6: Ex6(); break;
        case 7: Ex7(); break;    case 8: Ex8(); break;    case 9: Ex9(); break;
        case 10: Ex10(); break;  case 11: Ex11(); break;  case 14: Ex14(); break;
        case 15: Ex15(); break;  case 17: Ex17(); break;  case 18: Ex18(); break;
        case 19: Ex19(); break;  case 20: Ex20(); break;  case 21: Ex21(); break;
        case 22: Ex22(); break;  case 23: Ex23(); break;  case 24: Ex24(); break;
        case 25: Ex25(); break;  case 26: Ex26(); break;  case 27: Ex27(); break;
        case 28: Ex28(); break;  case 29: Ex29(); break;  case 30: Ex30(); break;
        case 31: Ex31(); break;  case 32: Ex32(); break;  case 33: Ex33(); break;
        case 34: Ex34(); break;  case 35: Ex35(); break;  case 36: Ex36(); break;
        case 37: Ex37(); break;  case 38: Ex38(); break;  case 39: Ex39(); break;
        case 40: Ex40(); break;  case 41: Ex41(); break;  case 100: medicalQuiz(); break;
        case 42: Ex42(); break;  case 43: Ex43(); break;  case 44: Ex44(); break;
        case 45: Ex45(); break;  case 46: Ex46(); break;  case 47: Ex47(); break;
        case 48: Ex48(); break;  case 49: Ex49(); break;  case 50: Ex50(); break;
        case 51: Ex51(); break;  case 52: Ex52(); break;  case 53: Ex53(); break;
        case 54: Ex54(); break;  case 55: Ex55(); break;  case 56: Ex56(); break;
        case 57: Ex57(); break;  case 58: Ex58(); break;  case 59: Ex59(); break;
        case 60: Ex60(); break;  case 61: Ex61(); break;  case 62: Ex62(); break;
        case 63: Ex63(); break;  case 64: Ex64(); break;  case 65: Ex65(); break;
        case 66: Ex66(); break;
        default: cout << "Sorry - that exercise isn't implemented yet.\n";
    }
}


//ALL EXERCISES ARE FOUND HERE:

void medicalQuiz() {

    // This program asks 10 questions related to depression indicators.
    // Scale per question: 1 = Rarely or Never, 2 = Sometimes, 3 = Often or Always
    // Scoring: 3 -> 10 points, 2 -> 5 points, 1 -> 3 points
    // Higher total means more depression.
    // Levels:
    //   Level A � High Depression:     71�100
    //   Level B � Moderate Depression: 50�70
    //   Level C � Low Depression:       30�49

    //string array with all questions
    string questions[10] = {
        "1. Over the past two weeks, how often have you felt little interest or pleasure in doing things?",
        "2. How often have you experienced a persistent sad, empty, or hopeless mood?",
        "3. How often have you had trouble falling asleep, staying asleep, or sleeping too much?",
        "4. How often have you felt tired or had little energy during the day?",
        "5. How often have you noticed a significant change in your appetite or weight(increase or decrease)?",
        "6. How often have you had difficulty concentrating on things such as reading or watching television?",
        "7. How often have you felt worthless or experienced excessive guilt?",
        "8. How often have you moved or spoken noticeably more slowly or felt unusually restless?",
        "9. How often have you withdrawn from friends or family or avoided social activities you used to enjoy?",
        "10. How often have you had thoughts of self harm?"
    };
    int answer; // User answer for each question
    int points; // Points for a single question
    int total = 0; // Total score across 10 questions
    bool highRisk = false; //if Q10 is answered as 3 (Often/Always) RISKY

    //Instructions 
    cout << "Depression Self-Check Quiz\n";
    cout << "Over the past 2 weeks, how often have you been bothered by the following problems?\n";
    cout << "Enter these numbers as your answers:\n";
    cout << "1 - (Rarely/Never)\n";
    cout << "2 - (Sometimes)\n";
    cout << "3 - (Often/Always)\n";

    //Loop to display all questions and get users response
    for (int i = 0; i < 10; i++) {
        cout << "\n" << questions[i] << endl;
        cout << "Your response (1-3): ";
        cin >> answer;

        //Invalid input handling logic
        while (answer < 1 || answer > 3) {
            cout << "Invalid input:\n";
            cout << "Please enter a valid number (1-3): ";
            cin >> answer;
        }

        //Conditional logic to determine amount of points from user response
        if (answer == 3) {
            points = 10;
        }
        else if (answer == 2) {
            points = 5;
        }
        else {
            points = 3;
        }
        total += points;

        //If the response to the last question (10) is "Often/Always" user might be a highRisk
        //Add an additional important message
        if (i == 9 && answer == 3) {
            highRisk = true;
        }

    }

    //Show final score
    cout << "\nYour total score is: " << total << " (30 to 100 scale)\n";

    //Determine level and show advice
    if (total >= 71 && total <= 100) {
        cout << "Level A - High Depression\n";
        cout << "Suggestions:\n";
        cout << "1) Consider reaching out to a mental health professional.\n";
        cout << "2) Talk to a trusted friend or family member about how you feel.\n";
        cout << "3) Create a simple daily routine (regular sleep, healthy meals, light activity).\n";
        cout << "4) Focus on a creative activity to take your mind off things (art, music, sports)\n";
        cout << "5) If you feel at risk of harming yourself, seek immediate help.\n";
    }
    else if (total >= 50 && total <= 70) {
        cout << "Level B - Moderate Depression\n";
        cout << "Suggestions:\n";
        cout << "1) Add small activities you can finish (short walks, hangout with friends/family).\n";
        cout << "2) Keep a regular sleep schedule and balanced meals.\n";
        cout << "3) Track your mood or write brief notes to notice patterns.\n";
        cout << "4) Practice simple relaxation (breathing or short mindfulness).\n";
        cout << "5) Consider speaking with a counselor if symptoms persist or increase.\n";
    }
    else {
        cout << "Level C - Low Depression\n";
        cout << "Suggestions:\n";
        cout << "1) Maintain your current healthy habits (sleep, meals, movement).\n";
        cout << "2) Stay connected with supportive people.\n";
        cout << "3) Keep doing pleasant activities and hobbies.\n";
        cout << "4) Use early coping steps when stressed (break tasks down, short walks).\n";
        cout << "5) If mood changes, consider checking in with a professional.\n";
    }

    //safety message if Q10 was 3)Often/Always
    if (highRisk == true) {
        cout << "\nImportant:\n";
        cout << "Because you reported frequent thoughts of self-harm, consider speaking with a professional immediately.\n";
        cout << "If you feel you might act on these thoughts, call your local emergency number right now.\n";
        cout << "In the U.S., you can dial 988 for the Suicide & Crisis Lifeline.\n";
    }


    //Sources used to develop the quiz questions:
    //1) American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders,
    //   5th Edition (DSM-5). Criteria for Major Depressive Disorder.
    //   https://www.ncbi.nlm.nih.gov/books/NBK519712/table/ch3.t5/
    //2) Kroenke K, Spitzer RL, Williams JB. The Patient Health Questionnaire-9 (PHQ-9).
    //   A validated screening tool for depression symptoms.
    //   https://www.mdcalc.com/calc/1725/phq9-patient-health-questionnaire9
    //3) World Health Organization (WHO). Depression Fact Sheet.
    //   https://www.who.int/news-room/fact-sheets/detail/depression


}

void Ex1()
{
    float a; //Declaring variables to store integers and results
    float b;
    int add;
    int sus;
    int mult;
    float div;

    cout << "Hello World!\n"; //Displaying to the screen
    cout << "My name is Jonathan\n";
    cout << "This is CS 330\n";


    cout << "Enter 1 number: ";
    cin >> a; //storing first number to variable a

    cout << "Enter 2 number: ";
    cin >> b; //storing second number to variable b

    add = a + b; //performing arithmetic operations and storing values in variables
    sus = a - b;
    mult = a * b;
    div = a / b;

    cout << "ADD is: " << add; //Displaying the result from all operations
    cout << "\nSUS is: " << sus;
    cout << "\nMULT is: " << mult;
    cout << "\nDIV is: " << div;



}

void Ex5() {
    int a;
    int b;
    float avg; //float variable because average can be a decimal number


    cout << "Welcome to the average number program\n";

    cout << "Enter first number: ";
    cin >> a;

    cout << "Enter second number: ";
    cin >> b;

    avg = (a + b) / 2.0; //dividing by 2.0 to make avg a floating point number

    cout << "\nThe average of the two numbers is: " << avg;



}

void Ex6() {
    int a; //Declare integer variables
    int b;
    string num1 = "ODD";  //initialize strings with "odd" as value
    string num2 = "ODD";

    cout << "Welcome to the even/odd program!\n";

    cout << "Enter first number: ";
    cin >> a;

    cout << "Enter second number: ";
    cin >> b;

    if (a % 2 == 0) { //Determine is a is even by using the modulo operator
        num1 = "EVEN";

    }

    if (b % 2 == 0) { //Determine is b is even by using the modulo operator
        num2 = "EVEN";

    }

    cout << "\nNumber 1 is " << num1 << " and Number 2 is " << num2; //Display result
}


void Ex7(){
    int a;
    int b;

    string sign1;
    string sign2; //Declaring sign string variable to store sign for the numbers

    cout << "Welcome to finding sign of numbers program\n"; //cout used to print to the screen

    cout << "Enter first number: ";
    cin >> a; //cin used to store input provided by the user into a variable

    cout << "Enter second number: ";
    cin >> b;

    //Conditional logic to determine if a is positive, negative or ZERO
    if (a > 0) { 
        sign1 = "+";
    }
    else if (a < 0) {
        sign1 = "-";
    }
    else {
        sign1 = "ZERO";
    }

    //Conditional logic to determine if b is positive, negative or ZERO
    if (b > 0) {
        sign2 = "+";
    }
    else if (b < 0) {
        sign2 = "-";
    }
    else {
        sign2 = "ZERO";
    }

    cout << "\nNumber 1 is " << sign1 << " and Number 2 is " << sign2; //Displaying the result


}



void Ex8() {

    float a;


    cout << "Welcome to the square root program\n";

    cout << "Enter first number: ";
    cin >> a;

    if (a < 0) {
        cout << "There is no sqrt for negative numbers!";
    }

    else {

        float sqrRoot = sqrt(a); //Using sqrt method from math

        cout << "\nThe square root of the number is: " << sqrRoot;
    }
}

void Ex9() {
    float a; //Declare float a 
    cout << "Welcome to the absolute value program!\n";

    cout << "Enter first number: ";
    cin >> a;

    float absVal = abs(a); //Calculate absolute value using abs function from Math

    cout << "\nThe absolute value of the number is: " << absVal;

}


void Ex10() {
    int sideL; //Declaring variables to use in the program
    int perimeter;
    int area;


    cout << "Welcome to the calculate perimeter and area of a square program!\n";

    cout << "Enter the length of the side of the square: ";
    cin >> sideL; //store the length value into sideL

    perimeter = sideL * 4; //Calculate perimeter
    area = sideL * sideL; //Calculate area

    cout << "The perimeter of the square is: " << perimeter << " and the area is: " << area;
}



void Ex11() {
    int table;//Declaring variables
    int result;
    int lim; //variable that will denote limit for the for loop
    cout << "Welcome to the multiplication table of 2 program\n";

    cout << "Enter the table number: ";
    cin >> table; //storing which multiplication table we will display

    cout << "Enter the limit: ";
    cin >> lim;

    //using a for loop to display the multiplication table for the number provided by user
    for (int i = 1; i <= lim; i++) { //for [1,lim] inclusive
        result = i * table; //multiply i * table
        cout << "\nMultiplying " << i << " times " << table << " = " << result;
    }
}


void Ex14(){
    int side1;
    int side2;
    float hypSqr;
    int hyp;

    cout << "Welcome to the hypotenuse of a right triangle calculation program\n";

    cout << "Enter the length of the first side: ";
    cin >> side1;

    cout << "Enter the length of the second side: ";
    cin >> side2;

    hypSqr = pow(side1, 2) + pow(side2, 2); //Calculate c^2
    hyp = sqrt(hypSqr); //calculate possible hypotenuse

    if (pow(hyp, 2) == hypSqr) { //If hyp^2 equals the hypSqr
        cout << "The hypotenuse is: " << hyp;

    }
    else { //Otherwise there triangle is not a right triangle
        cout << "The triangle is not a right triangle, cannot get hypotenuse";
    }
}

void Ex15() {
    float exchangeRate;
    float amountDollar;
    float amountEuro;

    float finalDollarAmount;
    float finalEuroAmount;


    cout << "Welcome to the exchange application\n";



    cout << "Enter exchange rate from Dollar to Euro: ";
    cin >> exchangeRate;


    cout << "Enter amount of euros to exchange: ";
    cin >> amountEuro;
    finalDollarAmount = amountEuro / exchangeRate; //calculating dollar amount by dividing euro by dollar exchange rate


    cout << "Enter amount of Dollars to exchange: ";
    cin >> amountDollar;
    finalEuroAmount = amountDollar * exchangeRate; // calculating euro amount by multiplying dollar amount times exchange rate


    cout << amountEuro << " Euros = " << finalDollarAmount << " dollars\n"; //displaying results 
    cout << amountDollar << " Dollars = " << finalEuroAmount << " euros\n";

}


void Ex17() {
    int num1;
    int num2;
    int temp; //variable that will hold a value temporarily

    cout << "Welcome to the exchange numbers program!\n";

    cout << "Enter first number to exchange: ";
    cin >> num1;

    cout << "Enter second number to exchange: ";
    cin >> num2;

    temp = num1; //temp stores num1 value so that later values can be swapped
    num1 = num2;
    num2 = temp;

    cout << "\nThe two values have been exchanged!";
    cout << "\nNow the first number is " << num1 << " and the second is " << num2;
}


void Ex18() {
    int num1;
    int num2;
    int num3;

    cout << "Welcome to the determining smallest number program!\n";

    cout << "Enter the first number: ";
    cin >> num1;

    cout << "Enter the second number: ";
    cin >> num2;

    cout << "Enter the third number: ";
    cin >> num3;

    //conditional logic to determine which number is the smallest
    if (num1 <= num2 && num1 <= num3) { //if num1 is less than or equal to both num2 and num3
        cout << "The smallest number is " << num1;
    }
    else if (num2 <= num1 && num2 <= num3) { //else if num2 is less than or equal to both num1 and num3
        cout << "The smallest number is " << num2;


    }
    else { //Otherwise num3 is the smallest one
        cout << "The smallest number is " << num3;

    }
}

void Ex19() {
    int num1;
    int num2;
    int num3;

    cout << "Welcome to the determining largest number program!\n";

    cout << "Enter the first number: ";
    cin >> num1;

    cout << "Enter the second number: ";
    cin >> num2;

    cout << "Enter the third number: ";
    cin >> num3;

    //conditional logic to determine which number is the greatest
    if (num1 >= num2 && num1 >= num3) { //if num1 is greater than both num2 and num3
        cout << "The largest number is " << num1;
    }
    else if (num2 >= num1 && num2 >= num3) { //else if num2 is greater than both num1 and num3
        cout << "The largest number is " << num2;


    }
    else { //Otherwise num3 is the largest one
        cout << "The largest number is " << num3;

    }
}

void Ex20() {
    int num1;
    int num2;
    int sqrSum;

    cout << "Welcome to the sum of squares program!\n";

    cout << "Enter the first number: ";
    cin >> num1;

    cout << "Enter the second number: ";
    cin >> num2;

    sqrSum = pow(num1, 2) + pow(num2, 2); //using pow method that take value, and then power to be raised

    cout << "The sum of " << num1 << " squared + " << num2 << " squared = " << sqrSum;

}


void Ex21() {
    int num1;
    int num2;
    int num3;
    int biggest;
    int smallest;

    //21. Program that prompts the user to enter three numbers, then determines and displays the largest and smallest among them.
    cout << "Welcome to the determining minimum and maximum program!\n";
    cout << "\nEnter the first number: ";
    cin >> num1;

    cout << "\nEnter the second number: ";
    cin >> num2;

    cout << "\nEnter the third number: ";
    cin >> num3;


    if (num1 >= num2 && num1 >= num3) {
        biggest = num1;
        if (num2 < num3) {
            smallest = num2;
        }
        else {
            smallest = num3;
        }
    }
    else if (num2 >= num1 && num2 >= num3) {
        biggest = num2;
        if (num1 < num3) {
            smallest = num1;
        }
        else {
            smallest = num3;
        }
    }
    else {
        biggest = num3;
        if (num2 < num1) {
            smallest = num2;
        }
        else {
            smallest = num1;
        }
    }

    cout << "\nThe biggest number is: " << biggest;
    cout << "\nThe smallest number is: " << smallest;

}

void Ex22() {
    cout << "Welcome to the 100 integer sum exercise\n";
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }

    cout << "The sum of the first 100 positive integers is: " << sum;


}

void Ex23() {
    cout << "Welcome to the 100 even integers sum exercise\n";
    int sum = 0;
    int even = 0;
    for (int i = 1; i <= 100; i += 1) {
        even += 2;
        sum += even;
    }

    cout << "The sum of the first 100 even positive integers is: " << sum;
}


void Ex24() {
    float a;
    float b;
    float c;
    float x;
    cout << "Welcome to the linear equation solver\n";
    cout << "Enter the value of a: ";
    cin >> a;

    cout << "Enter the the value of b: ";
    cin >> b;

    cout << "Enter the the value of c: ";
    cin >> c;

    if (a != 0) {
        x = (c - b) / a;
        cout << "\nThe value of x = " << x;

    }
    else {
        cout << "ERROR: Cannot divide by 0!";
    }
}


void Ex25() {
    // This program solves a quadratic equation of the form: ax^2 + bx + c = 0
// The user enters the coefficients a, b, and c.
// The program calculates the discriminant (b^2 - 4ac)
// and explains the meaning of the discriminant value.

    double a, b, c;      // Coefficients of the quadratic equation
    double discriminant; // b^2 - 4ac
    double x1, x2; // Solutions (if real)

    //Input coefficients
    cout << "Enter coefficient a: ";
    cin >> a;
    cout << "Enter coefficient b: ";
    cin >> b;
    cout << "Enter coefficient c: ";
    cin >> c;

    //Check if a is zero
    // If a is 0, the equation is not quadratic.
    if (a == 0) {
        cout << "\nERROR: This is not a quadratic equation because a = 0.\n";
        return;
    }

    //Calculating the discriminant
    discriminant = (b * b) - (4 * a * c);

    // Analyze discriminant (D) and solve
    // The discriminant tells us how many real solutions exist:
    //  D > 0 -> two distinct real solution
    //  D = 0 -> one real solution
    //  D < 0 -> no real roots (complex solutions)
    cout << "\nDiscriminant (b^2 - 4ac) = " << discriminant << "\n";

    if (discriminant > 0) {
        // Two distinct real solutions
        x1 = (-b + sqrt(discriminant)) / (2 * a);
        x2 = (-b - sqrt(discriminant)) / (2 * a);
        cout << "Since the discriminant is greater than zero,\n";
        cout << "the equation has 2 distinct real solutions.\n";
        cout << "x1 = " << x1 << "\n";
        cout << "x2 = " << x2 << "\n";
    }
    else if (discriminant == 0) {
        // One real double root
        x1 = -b / (2 * a);
        cout << "Since the discriminant equals zero,\n";
        cout << "the equation has 1 real solution.\n";
        cout << "x = " << x1 << "\n";
    }
    else {
        // No real roots (complex solutions)
        cout << "Since the discriminant is less than zero,\n";
        cout << "the equation has no real roots (the solutions are complex).\n";
        cout << "Complex solutions are not computed by this program.\n";
    }

}

void Ex26() {
    int n;
    cout << "Welcome to the N integer sum exercise\n";
    cout << "Enter N value (must be > 0): ";
    cin >> n;


    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }

    cout << "The sum of the first N positive integers is: " << sum;
}

void Ex27() {
    int n;

    cout << "Welcome to the N even integer sum exercise\n";
    cout << "Enter N value (must be > 0): ";
    cin >> n;


    int sum = 0;
    int even = 0;
    for (int i = 1; i <= n; i += 1) {
        even += 2;
        sum += even;
    }

    cout << "The sum of the first " << n << " even positive integers is: " << sum;
}


void Ex28() {
    // This program converts kilometers to meters and meters to kilometers.
// The user enters the value to convert and the direction of conversion.

    double value;// Number to convert
    int choice; // 1 for km to m, 2 for m to km

    //Prompt for conversion direction
    cout << "Enter 1 to convert kilometers to meters\n";
    cout << "Enter 2 to convert meters to kilometers\n";
    cout << "Your choice: ";
    cin >> choice;

    //Prompt for value to convert
    cout << "Enter the value to convert: ";
    cin >> value;

    //Perform conversion based on choice
    if (choice == 1) {
        // Kilometers to meters
        double meters = value * 1000;
        cout << value << " kilometers is " << meters << " meters.\n";
    }
    else if (choice == 2) {
        // Meters to kilometers
        double kilometers = value / 1000;
        cout << value << " meters is " << kilometers << " kilometers.\n";
    }
    else {
        // Invalid selection
        cout << "Invalid choice. Please try again.\n";
    }

}


void Ex29() {
    // This program is a Lakers quiz game with 5 questions.
 // Each correct answer is worth 100 points.
 // If total score > 300, print "YOU ARE THE BEST!", otherwise print "Never Give Up."

    int score = 0;  // Total score
    int answer;     // User answer

    cout << "Welcome to the Los Angeles Lakers Quiz\n";
    cout << "Select the correct option number for each question.\n\n";

    // Question 1
    cout << "1) In what year were the Lakers founded (as the Minneapolis Lakers)?\n";
    cout << "   1) 1946\n";
    cout << "   2) 1947\n";
    cout << "   3) 1950\n";
    cout << "   4) 1960\n";
    cout << "Your answer: ";
    cin >> answer;
    if (answer == 2) {
        score += 100;
    }

    // Question 2 
    cout << "\n2) How many NBA championships have the Lakers won as of 2025?\n";
    cout << "   1) 16\n";
    cout << "   2) 17\n";
    cout << "   3) 18\n";
    cout << "   4) 19\n";
    cout << "Your answer: ";
    cin >> answer;
    if (answer == 2) {
        score += 100;
    }

    // Question 3 
    cout << "\n3) Which Lakers player scored the most points in a single game?\n";
    cout << "   1) Kareem Abdul-Jabbar\n";
    cout << "   2) Magic Johnson\n";
    cout << "   3) Kobe Bryant\n";
    cout << "   4) Shaquille O'Neal\n";
    cout << "Your answer: ";
    cin >> answer;
    if (answer == 3) {
        score += 100;
    }

    // Question 4 
    cout << "\n4) Who was the head coach during the 2000-2002 three-peat?\n";
    cout << "   1) Phil Jackson\n";
    cout << "   2) Pat Riley\n";
    cout << "Your answer: ";
    cin >> answer;
    if (answer == 1) {
        score += 100;
    }

    // Question 5 
    cout << "\n5) Which team is the Lakers' most famous rival?\n";
    cout << "   1) Boston Celtics\n";
    cout << "   2) Chicago Bulls\n";
    cout << "Your answer: ";
    cin >> answer;
    if (answer == 1) {
        score += 100;
    }

    // Final result
    cout << "\nYour final score: " << score << "\n";
    if (score > 300) {
        cout << "YOU ARE THE BEST!\n";
    }
    else {
        cout << "Never Give Up.\n";
    }

}

void Ex30() {
    // This program is a personalization quiz to help a user select a custom t-shirt.
  // There are 6 questions:
  // After the quiz, the program displays a summary of the selected t-shirt.

    int answer; // Variable to hold user choices
    string sleeve, color, size, printType, design, fabric; // User preferences

    cout << "Welcome to the T-Shirt Personalization Quiz!\n";
    cout << "Answer the questions by entering the number of your choice.\n\n";

    // Question 1 - Sleeve length
    cout << "1) What sleeve style do you prefer?\n";
    cout << "   1) Short sleeves\n";
    cout << "   2) Long sleeves\n";
    cout << "Your answer: ";
    cin >> answer;
    if (answer == 1) {
        sleeve = "short-sleeved";
    }
    else {
        sleeve = "long-sleeved";
    }

    // Question 2 Print or plain
    cout << "\n2) Do you want a print on your t-shirt?\n";
    cout << "   1) With a print\n";
    cout << "   2) Plain (no print)\n";
    cout << "Your answer: ";
    cin >> answer;
    if (answer == 1) {
        printType = "with a print";
    }
    else {
        printType = "plain";
    }

    // Question 3 - Print design preference
    cout << "\n3) Choose a print design (if plain, this will be ignored):\n";
    cout << "   1) Logo\n";
    cout << "   2) Animal\n";
    cout << "   3) Geometric shapes\n";
    cout << "   4) Funny quote\n";
    cout << "Your answer: ";
    cin >> answer;
    switch (answer) {
    case 1:
        design = "a logo print";
        break;
    case 2:
        design = "an animal print";
        break;
    case 3:
        design = "a geometric shapes print";
        break;
    default:
        design = "a funny quote print";
        break;


    }

    // Question 4 - Size
    cout << "\n4) Select your t-shirt size:\n";
    cout << "   1) S\n";
    cout << "   2) M\n";
    cout << "   3) L\n";
    cout << "   4) XL\n";
    cout << "Your answer: ";
    cin >> answer;
    switch (answer) {
    case 1:
        size = "size S";
        break;
    case 2:
        size = "size M";
        break;
    case 3:
        size = "size L";
        break;
    default:
        size = "size XL";
        break;

    }

    // Question 5 - Color
    cout << "\n5) Choose a color:\n";
    cout << "   1) Black\n";
    cout << "   2) White\n";
    cout << "   3) Blue\n";
    cout << "   4) Red\n";
    cout << "Your answer: ";
    cin >> answer;
    switch (answer) {
    case 1:
        color = "black";
        break;
    case 2:
        color = "white";
        break;
    case 3:
        color = "blue";
        break;
    default:
        color = "red";
        break;

    }

    // Question 6 - Fabric
    cout << "\n6) Choose a fabric type:\n";
    cout << "   1) Cotton\n";
    cout << "   2) Polyester\n";
    cout << "   3) Blend\n";
    cout << "   4) Silk\n";
    cout << "Your answer: ";
    cin >> answer;
    switch (answer) {
    case 1:
        fabric = "cotton";
        break;
    case 2:
        fabric = "polyester";
        break;
    case 3:
        fabric = "a blended fabric";
        break;
    default:
        fabric = "silk";
        break;

    }

    // Display final configuration depending on print choice
    cout << "\nYour personalized t-shirt configuration:\n";
    if (printType == "plain") {
        cout << "The user prefers a " << color << ", " << sleeve
            << " t-shirt, " << size << ", made of " << fabric
            << ", with no print.\n";
    }
    else {
        cout << "The user prefers a " << color << ", " << sleeve
            << " t-shirt, " << size << ", made of " << fabric
            << ", with " << design << ".\n";
    }

}

void Ex31() {
    // Create an array of 5 elements
    int numbers[5];
    // Input values
    cout << "Enter 5 numbers:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Number " << i + 1 << ": ";
        cin >> numbers[i];
    }
    // Calculate the sum
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    // Display the result
    cout << "\nThe sum of the array elements is: " << sum << endl;
}

void Ex32() {
    // Create two integer arrays a1 and b1.
  // The user will input the values for both arrays.
  // Then add the corresponding elements and store the results in a third array c1.

    int a1[5];// First integer array
    int b1[5];// Second integer array
    int c1[5];// Third array to store the sums

    //Input values for array a1
    cout << "Enter " << 5 << " integers for FIRST array:\n";
    for (int i = 0; i < 5; i++) {
        cout << "a1[" << i << "]: ";
        cin >> a1[i];
    }

    //Input values for array b1
    cout << "\nEnter " << 5 << " integers for SECOND array:\n";
    for (int i = 0; i < 5; i++) {
        cout << "b1[" << i << "]: ";
        cin >> b1[i];
    }

    //Add corresponding elements and store in c1
    for (int i = 0; i < 5; i++) {
        c1[i] = a1[i] + b1[i];
    }

    //Display the results of c1
    cout << "\nResults:\n";
    for (int i = 0; i < 5; i++) {
        cout << "\na1[" << i << "] + " << "b1[" << i << "] = " << c1[i];
    }
}


void Ex33() {
    // Create two integer arrays a1 and b1.
 // The user will input the values for both arrays.
 // 1) Multiply the corresponding elements and store the results in a third array d1.
 // 2) Divide the corresponding elements (b1[i] / a1[i]) and store the results in a fourth array e1.
 //    Division is only performed if a1[i] is not zero.

    int a1[5];    // First integer array
    int b1[5];    // Second integer array
    int d1[5];    // Third array to store the products
    double e1[5]; // Fourth array to store the quotients (use double for division)

    //Input values for array a1
    cout << "Enter " << 5 << " integers for FIRST array:\n";
    for (int i = 0; i < 5; i++) {
        cout << "a1[" << i << "]: ";
        cin >> a1[i];
    }

    //Input values for array b1
    cout << "\nEnter " << 5 << " integers for SECOND array:\n";
    for (int i = 0; i < 5; i++) {
        cout << "b1[" << i << "]: ";
        cin >> b1[i];
    }

    //Multiply corresponding elements and store in d1
    for (int i = 0; i < 5; i++) {
        d1[i] = a1[i] * b1[i];
    }

    //Divide corresponding elements and store in e1
    // Check that a1[i] is not zero before dividing
    for (int i = 0; i < 5; i++) {
        if (a1[i] != 0) {
            e1[i] = (b1[i] * 1.0) / a1[i];
        }
        else {
            e1[i] = 0; // Store 0 if division is not possible
        }
    }

    //Display the results of d1 (products)
    cout << "\nProducts of corresponding elements (a1[i] * b1[i]):\n";
    for (int i = 0; i < 5; i++) {
        cout << "\na1[" << i << "] * b1[" << i << "] = " << d1[i];
    }

    //Display the results of e1 (quotients)
    cout << "\n\nQuotients of corresponding elements (b1[i] / a1[i]):\n";
    for (int i = 0; i < 5; i++) {
        if (a1[i] != 0) {
            cout << "\nb1[" << i << "] / a1[" << i << "] = " << e1[i];
        }
        else { //If a1[i] was zero, then there was a division error
            cout << "\nb1[" << i << "] / a1[" << i << "] = undefined (division by zero)";
        }
    }

}

void Ex34() {
    // This program creates two integer arrays A and B with 5 elements entered by the user.
 // Then it creates four new arrays to store:
 // 1) The sum of A and B -> Addition[]
 // 2) The difference A - B -> Subtraction[]
 // 3) The product A * B -> Multiplication[]
 // 4) The division A / B -> Division[] (handle division by zero)

    int A[5];  // First integer array
    int B[5]; // Second integer array
    int Addition[5];  // Stores A[i] + B[i]
    int Subtraction[5]; // Stores A[i] - B[i]
    int Multiplication[5];// Stores A[i] * B[i]
    double Division[5]; // Stores A[i] / B[i] as a double

    //Input values for array A
    cout << "Enter 5 integers for array A:\n";
    for (int i = 0; i < 5; i++) {
        cout << "A[" << i << "]: ";
        cin >> A[i];
    }

    //Input values for array B
    cout << "\nEnter 5 integers for array B:\n";
    for (int i = 0; i < 5; i++) {
        cout << "B[" << i << "]: ";
        cin >> B[i];
    }

    //Perform calculations for each index
    for (int i = 0; i < 5; i++) {
        Addition[i] = A[i] + B[i];
        Subtraction[i] = A[i] - B[i];
        Multiplication[i] = A[i] * B[i];

        //Check that B[i] is not zero before dividing
        if (B[i] != 0) {
            Division[i] = (A[i] * 1.0) / B[i];  // 1.0 to force floating-point division
        }
        else {
            Division[i] = 0; // Store 0 when division is not possible
        }
    }

    //Display results
    cout << "\nResults of operations between corresponding elements of A and B:\n";
    for (int i = 0; i < 5; i++) {
        cout << "\nIndex " << i << ":";
        cout << "\n  A + B = " << Addition[i];
        cout << "\n  A - B = " << Subtraction[i];
        cout << "\n  A * B = " << Multiplication[i];
        if (B[i] != 0) {
            cout << "\n  A / B = " << Division[i];
        }
        else {
            cout << "\n  A / B = undefined (division by zero)";
        }
        cout << "\n";
    }

}


void Ex35() {
    int A[5];
    int B[5];
    int N;
    cout << "\nArray multiplication by N\n";


    //Input values for array A
    cout << "Enter 5 integers for array A:\n";
    for (int i = 0; i < 5; i++) {
        cout << "A[" << i << "]: ";
        cin >> A[i];

    }

    cout << "Enter number n to multiply each array number: ";
    cin >> N;

    for (int i = 0; i < 5; i++) {
        B[i] = A[i] * N;

    }

    //Displaying new array A[i] * N
    cout << "This are all the elements of A multiplied by N: ";
    for (int i = 0; i < 5; i++) {
        cout << "\nB[" << i << "] = " << B[i];

    }


}


void Ex36() {
    int M[2][2]; //Create 2,2 matrix
    int sum = 0;
    cout << "2x2 Matrix sum\n";
    cout << "Enter number for all cells\n";

    //Loop to input numbers for each matrix spot
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << "Enter value for M[" << i << "][" << j << "]: ";
            cin >> M[i][j];
            sum += M[i][j]; //Calculating sum at the same time value is stored
        }
    }

    cout << "The sum of all total numbers in M = " << sum;
}


void Ex37() {
    int M1[2][2]; //Create first 2,2 matrix
    int M2[2][2]; //Create second 2,2 matrix
    int addM[2][2];  //Create subsequent matrices to store necessary operations
    int subM[2][2];
    int multM[2][2];
    int sum = 0;

    cout << "Matrix Add, Sub & Mult program!\n";

    //Entering values for first matrix
    cout << "\nEnter values for M1";
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << "Enter value for M1[" << i << "][" << j << "]: ";
            cin >> M1[i][j];
        }
    }

    //Entering values for second matrix
    cout << "\nEnter values for M2";
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << "Enter value for M2[" << i << "][" << j << "]: ";
            cin >> M2[i][j];
        }
    }

    //Performing matrix addition and subtraction in the same loop
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            addM[i][j] = M1[i][j] + M2[i][j];
            subM[i][j] = M1[i][j] - M2[i][j];

        }
    }

    //Logic for matrix multiplication (triple loop)
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int idx = 0; idx < 2; idx++) {
                sum += M1[i][idx] * M2[idx][j]; //Calculating the sum for the mult matrix
            }

            multM[i][j] = sum; //Setting sum in right spot
            sum = 0; //Resetting sum count


        }
    }
    //Displaying addition array:
    cout << "\nThis are all the elements of addM (M1 + M2)";
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << "\naddM[" << i << "][" << j << "] = " << addM[i][j];
        }

    }
    //Displaying subtraction array:
    cout << "\nThis are all the elements of subM (M1 - M2)";
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << "\nsubM[" << i << "][" << j << "] = " << subM[i][j];
        }

    }

    //Displaying multiplication array:
    cout << "\nThis are all the elements of multM (M1 * M2)";
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << "\nmultM[" << i << "][" << j << "] = " << multM[i][j];
        }

    }

}


void Ex38() {
    int greaterNumber(int, int); //Declaring function to be called within main()
    int val1;
    int val2;
    int result;


    cout << "Determine greater number using a function\n";

    cout << "\nEnter first value for the function: ";
    cin >> val1;
    cout << "\nEnter second value for the function: ";
    cin >> val2;

    result = greaterNumber(val1, val2);

    cout << "\nThe greater number between " << val1 << " and " << val2 << " is " << result;
}



//function that receives two integers and returns the greater of the two
int greaterNumber(int num1, int num2) {
    if (num1 > num2) {
        return num1;
    }

    else {
        return num2;
    }
}

void Ex39() {
    int sumOfValues(int, int); //Declaring function to be used in main()
    int val1;
    int val2;
    int result;

    cout << "Determine the sum of two numbers using a function\n";

    cout << "\nEnter first value for the function: ";
    cin >> val1;
    cout << "\nEnter second value for the function: ";
    cin >> val2;

    result = sumOfValues(val1, val2); //calling function

    cout << "\nThe addition of " << val1 << " and " << val2 << " = " << result;

}



//function that receives two integers and returns their sum
int sumOfValues(int num1, int num2) {

    return num1 + num2;

}

void Ex40() {
    int subtractValues(int, int); //Declaring function to be used within main()
    int val1;
    int val2;
    int result;


    cout << "Determine the subtraction of two numbers using a function\n";

    cout << "\nEnter first value for the function: ";
    cin >> val1;
    cout << "\nEnter second value for the function: ";
    cin >> val2;

    result = subtractValues(val1, val2); //Calling function

    cout << "\nThe subtraction of " << val2 << " from " << val1 << " = " << result;


}



//function that receives two integers and returns num1 - num2
int subtractValues(int num1, int num2) {

    return num1 - num2;

}



void Ex41() {
    int a;
    int b;
    int c;
    float s;
    float area;

    cout << "Welcome to the Area of a triangle program!\n";
    cout << "Enter the first side of the triangle A:";
    cin >> a;

    cout << "Enter the second side of the triangle B:";
    cin >> b;

    cout << "Enter the third side of the triangle C:";
    cin >> c;

    s = (a + b + c) / 2.0;

    area = sqrt(s * (s - a) * (s - b) * (s - c));

    cout << "The area of the triangle with sides: " << a << ", " << b << ", " << c << " is: " << area;
}

void Ex42() {
    int sum = 0;
    int odd = 1;
    cout << "Welcome to the sum of the first 100 odd integers program!\n";

    for (int i = 0; i < 100; i++) {
        sum += odd;
        odd += 2;

    }
    cout << "The sum of the first 100 odd integer is: " << sum;
}

void Ex43() {
    double a1;
    double b1;
    double a2;
    double b2;
    double c1;
    double c2;
    double sum = 0;
    double results[2][1];





    cout << "Welcome to the 2 linear equations solver\n";

    cout << "Enter the value for a1:";
    cin >> a1;

    cout << "Enter the value for b1:";
    cin >> b1;

    cout << "Enter the value for c1:";
    cin >> c1;

    cout << "Enter the value for a2:";
    cin >> a2;

    cout << "Enter the value for b2:";
    cin >> b2;

    cout << "Enter the value for c2:";
    cin >> c2;

    double MA[2][2] = { {a1,b1}, {a2,b2} };
    double C[2][1] = { {c1}, {c2} };

    //To solve linear equations, we need to find the inverse of MA, and multiply it times C, to get X
    //inverse of MA = 1/det * [ d -b
    //                        -c  a]

    double det = (MA[0][0] * MA[1][1]) - (MA[0][1] * MA[1][0]);

    if (det == 0) {
        cout << "No unique solution";
        return;
    }

    else {

        double invDet = 1.0 / det;

        double MAInv[2][2] = { {invDet * MA[1][1], invDet * -MA[0][1]},{invDet * -MA[1][0], invDet * MA[0][0]} };


        //Logic for matrix multiplication (triple loop) 2x2 * 2x1 = 2x1 results matrix with x and y solutions
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 1; j++) {
                for (int idx = 0; idx < 2; idx++) {
                    sum += MAInv[i][idx] * C[idx][j]; //Calculating the sum for the results matrix
                }
                results[i][j] = sum;
                sum = 0;


            }

        }



        cout << "\nThe result of x = " << results[0][0];
        cout << "\nThe result of y = " << results[1][0];


    }
}


void Ex44() {
    float exchangeRate;
    float amountDollar;

    float finalPesoAmount;

    cout << "Welcome to the exchange application\n";

    cout << "Enter exchange rate from Dollar to Pesos: ";
    cin >> exchangeRate;

    cout << "Enter amount of Dollars to exchange: ";
    cin >> amountDollar;
    finalPesoAmount = amountDollar * exchangeRate; // calculating peso amount by multiplying dollar amount times exchange rate

    cout << amountDollar << " Dollars = " << finalPesoAmount << " pesos\n"; //displaying results 
}


void Ex45() {
    float exchangeRate;
    float amountPeso;

    float finalDollarAmount;

    cout << "Welcome to the exchange application\n";

    cout << "Enter exchange rate from Dollar to Pesos: ";
    cin >> exchangeRate;

    cout << "Enter amount of Pesos to exchange: ";
    cin >> amountPeso;
    finalDollarAmount = amountPeso / exchangeRate; // calculating dollar amount by multiplying peso amount times exchange rate

    cout << amountPeso << " Pesos = " << finalDollarAmount << " dollars\n"; //displaying results 
}


void Ex46() {
    float exchangeRate;
    float amountDollar;

    float finalYenAmount;

    cout << "Welcome to the exchange application\n";

    cout << "Enter exchange rate from Dollar to Yen: ";
    cin >> exchangeRate;

    cout << "Enter amount of Dollars to exchange: ";
    cin >> amountDollar;
    finalYenAmount = amountDollar * exchangeRate; // calculating yen amount by multiplying dollar amount times exchange rate

    cout << amountDollar << " Dollars = " << finalYenAmount << " yen\n"; //displaying results 
}


void Ex47() {
    float exchangeRate;
    float amountYen;

    float finalDollarAmount;

    cout << "Welcome to the exchange application\n";

    cout << "Enter exchange rate from Dollar to Yen: ";
    cin >> exchangeRate;

    cout << "Enter amount of Yen to exchange: ";
    cin >> amountYen;
    finalDollarAmount = amountYen / exchangeRate; // calculating dollar amount by multiplying yen by yen exchange rate

    cout << amountYen << " Yen = " << finalDollarAmount << " dollars\n"; //displaying results 
}

void Ex48() {
    float exchangeRate;
    float amountDollar;

    float finalRupeeAmount;

    cout << "Welcome to the exchange application\n";

    cout << "Enter exchange rate from Dollar to Rupees: ";
    cin >> exchangeRate;

    cout << "Enter amount of Dollars to exchange: ";
    cin >> amountDollar;
    finalRupeeAmount = amountDollar * exchangeRate; // calculating rupee amount by multiplying dollar amount times exchange rate

    cout << amountDollar << " Dollars = " << finalRupeeAmount << " rupees\n"; //displaying results 
}


void Ex49() {
    float exchangeRate;
    float amountRupees;

    float finalDollarAmount;

    cout << "Welcome to the exchange application\n";

    cout << "Enter exchange rate from Dollar to Rupees: ";
    cin >> exchangeRate;

    cout << "Enter amount of Rupees to exchange: ";
    cin >> amountRupees;
    finalDollarAmount = amountRupees / exchangeRate; // calculating dollar amount by multiplying rupees by the exchange rate

    cout << amountRupees << " Rupees = " << finalDollarAmount << " dollars\n"; //displaying results 
}


void Ex50() {
    int makeChoice;
    int modelChoice;
    int colorChoice;
    int doorChoice;
    int transChoice;

    string make;
    string model;
    string color;
    string doors;
    string transmission;

    cout << "Welcome to the Dream Car Designer\n";

    // Question 1: Make
    cout << "Choose a make:\n";
    cout << "1) Toyota\n";
    cout << "2) Ford\n";
    cout << "3) BMW\n";
    cout << "4) Tesla\n";
    cout << "Enter choice: ";
    cin >> makeChoice;

    switch (makeChoice) {
    case 1: make = "Toyota"; break;
    case 2: make = "Ford"; break;
    case 3: make = "BMW";  break;
    case 4: make = "Tesla"; break;
    default: make = "Custom"; break;
    }

    // Question 2: Model (options based on make)
    cout << "Choose a model:\n";
    switch (makeChoice) {
    case 1: // Toyota
        cout << "1) Camry\n";
        cout << "2) Supra\n";
        cout << "3) RAV4\n";
        break;
    case 2: // Ford
        cout << "1) Mustang\n";
        cout << "2) F-150\n";
        cout << "3) Explorer\n";
        break;
    case 3: // BMW
        cout << "1) 3 Series\n";
        cout << "2) M4\n";
        cout << "3) X5\n";
        break;
    case 4: // Tesla
        cout << "1) Model 3\n";
        cout << "2) Model S\n";
        cout << "3) Model X\n";
        break;
    default: // Custom make
        cout << "1) Sport\n";
        cout << "2) Sedan\n";
        cout << "3) SUV\n";
        break;
    }
    cout << "Enter choice: ";
    cin >> modelChoice;

    switch (makeChoice) {
    case 1: // Toyota
        switch (modelChoice) {
        case 1: model = "Camry"; break;
        case 2: model = "Supra"; break;
        case 3: model = "RAV4";  break;
        default: model = "Custom"; break;
        }
        break;
    case 2: // Ford
        switch (modelChoice) {
        case 1: model = "Mustang"; break;
        case 2: model = "F-150";   break;
        case 3: model = "Explorer"; break;
        default: model = "Custom"; break;
        }
        break;
    case 3: // BMW
        switch (modelChoice) {
        case 1: model = "3 Series"; break;
        case 2: model = "M4"; break;
        case 3: model = "X5"; break;
        default: model = "Custom"; break;
        }
        break;
    case 4: // Tesla
        switch (modelChoice) {
        case 1: model = "Model 3"; break;
        case 2: model = "Model S"; break;
        case 3: model = "Model X"; break;
        default: model = "Custom"; break;
        }
        break;
    default: // Custom make
        switch (modelChoice) {
        case 1: model = "Sport"; break;
        case 2: model = "Sedan"; break;
        case 3: model = "SUV"; break;
        default: model = "Custom"; break;
        }
        break;
    }

    // Question 3: Color
    cout << "Choose a color:\n";
    cout << "1) Red\n";
    cout << "2) Blue\n";
    cout << "3) Black\n";
    cout << "4) White\n";
    cout << "5) Silver\n";
    cout << "Enter choice: ";
    cin >> colorChoice;

    switch (colorChoice) {
    case 1: color = "Red"; break;
    case 2: color = "Blue"; break;
    case 3: color = "Black"; break;
    case 4: color = "White"; break;
    case 5: color = "Silver"; break;
    default: color = "Custom"; break;
    }

    // Question 4: Doors
    cout << "Choose door configuration:\n";
    cout << "1) 2-door\n";
    cout << "2) 4-door\n";
    cout << "Enter choice: ";
    cin >> doorChoice;

    switch (doorChoice) {
    case 1: doors = "2-door"; break;
    case 2: doors = "4-door"; break;
    default: doors = "Custom"; break;
    }

    // Question 5: Transmission
    cout << "Choose transmission:\n";
    cout << "1) Automatic\n";
    cout << "2) Manual\n";
    cout << "Enter choice: ";
    cin >> transChoice;

    switch (transChoice) {
    case 1: transmission = "Automatic"; break;
    case 2: transmission = "Manual"; break;
    default: transmission = "Custom"; break;
    }

    //Displaying dream car configuration
    cout << "\nYour dream car:\n";
    cout << color << " " << doors << " " << make << " " << model << " (" << transmission << ")\n";
    cout << "Now let's work to get it!";
}


class People {
public:
    string name; // Attribute: person's name
    int age; //  person's age
    string occupation; // job

    People(string n, int a, string o) {
        name = n;
        age = a;
        occupation = o;
    }

    void introduce() {
        cout << name << " is " << age << " years old and works as a " << occupation << "." << endl;
    }
};

void Ex51() {
    string name, job;
    int age;
    cout << "\n[51] People Demo\n";
    cout << "Enter name: ";
    getline(cin, name);
    cout << "Enter age: ";
    cin >> age;
    cin.ignore();
    cout << "Enter occupation: ";
    getline(cin, job);

    People p(name, age, job);
    p.introduce();
}

class TimeMachine {
public:
    string model; // time machine model
    int currentYear; //  current year position
    int powerLevel; // power level 0-100

    TimeMachine(string m, int startYear, int power) {
        model = m;
        currentYear = startYear;
        powerLevel = power;
    }

    void travelTo(int year) {
        if (powerLevel < 10) {
            cout << "Power too low! Recharge before traveling." << endl;
        }
        else {
            cout << "The " << model << " warps from year " << currentYear << " to year " << year << "!" << endl;
            currentYear = year;
            powerLevel -= 10; // cost to travel
        }
    }

    void recharge() {
        powerLevel = 100;
        cout << "Time machine recharged to full power!" << endl;
    }
};

void Ex52() {
    int ch;
    cout << "\n[52] Time Machine Demo\n";
    string model; int startY; int power; int target;
    cout << "Enter model name: ";
    getline(cin, model);
    cout << "Enter starting year: ";
    cin >> startY;
    cout << "Enter initial power (0-100): ";
    cin >> power;
    TimeMachine tm(model, startY, power);
    cout << "Enter target year to travel: ";
    cin >> target;
    tm.travelTo(target);
    cout << "Recharge now? (1=yes, 0=no): ";
    cin >> ch;
    if (ch == 1) tm.recharge();
    cin.ignore();
}


class VirtualPet {
public:
    string name; // pet name
    int hunger; // hunger level 0 (full) to 100 (starving)
    int happiness; // happiness 0-100

    VirtualPet(string n, int h, int hp) {
        name = n;
        hunger = h;
        happiness = hp;
    }

    void feed() {
        hunger -= 20;
        if (hunger < 0) hunger = 0;
        cout << name << " has been fed. Hunger is now " << hunger << "." << endl;
    }

    void play() {
        happiness += 20;
        if (happiness > 100) happiness = 100;
        cout << name << " played and is happier! Happiness is now " << happiness << "." << endl;
    }

    void status() {
        cout << name << " -> Hunger: " << hunger << ", Happiness: " << happiness << endl;
    }
};

void Ex53() {
    cout << "\n[53] Virtual Pet Demo\n";
    string n;
    int h, hp;
    cout << "Enter pet name: ";
    getline(cin, n);
    cout << "Enter hunger (0-100): ";
    cin >> h;
    cout << "Enter happiness (0-100): ";
    cin >> hp;

    VirtualPet pet(n, h, hp);
    pet.status();
    cout << "Feed pet? (1=yes,0=no): ";
    int f;
    cin >> f;
    if (f == 1) pet.feed();
    cout << "Play with pet? (1=yes,0=no): ";
    int p;
    cin >> p;
    if (p == 1) pet.play();
    pet.status();
    cin.ignore();
}



class Taco {
public:
    string meatType; // taco meat
    int spiciness; //  0-10
    float price; //price in dollars

    Taco(string t, int s, float pr) {
        meatType = t;
        spiciness = s;
        price = pr;
    }

    void addSalsa() {
        spiciness += 1;
        if (spiciness > 10) spiciness = 10;
        cout << "Added salsa! Spiciness now " << spiciness << "." << endl;
    }

    void eat() {
        cout << "You enjoy a delicious " << meatType << " taco for $" << price << "!" << endl;
    }
};

void Ex54() {
    cout << "\n[54] Taco Demo\n";
    string t;
    int s;
    float pr;
    cout << "Enter taco meat type: ";
    getline(cin, t);
    cout << "Enter spiciness (0-10): ";
    cin >> s;
    cout << "Enter price: ";
    cin >> pr;

    Taco taco(t, s, pr);
    taco.addSalsa();
    taco.eat();
    cin.ignore();
}


class Pizza {
public:
    string size; // size (Small/Medium/Large)
    int toppings; // number of toppings
    int slices; // number of slices

    Pizza(string sz, int top, int sl) {
        size = sz;
        toppings = top;
        slices = sl;
    }

    void bake() {
        cout << "Baking a " << size << " pizza with " << toppings << " toppings..." << endl;
    }

    void eatSlice() {
        if (slices > 0) {
            slices -= 1;
            cout << "You ate a slice. " << slices << " slices left." << endl;
        }
        else {
            cout << "No slices left!" << endl;
        }
    }
};

void Ex55() {
    cout << "\n[55] Pizza Demo\n";
    string sz;
    int top;
    int sl;
    cout << "Enter size (Small/Medium/Large): ";
    getline(cin, sz);
    cout << "Enter number of toppings: ";
    cin >> top;
    cout << "Enter number of slices: ";
    cin >> sl;

    Pizza p(sz, top, sl);
    p.bake();
    p.eatSlice();
    cin.ignore();
}


class Dog {
public:
    string name; // dog's name
    string breed; // breed
    int age; // age

    Dog(string n, string b, int a) {
        name = n;
        breed = b;
        age = a;
    }

    void bark() {
        cout << name << " the " << breed << " barks loudly!" << endl;
    }

    void fetch(string item) {
        cout << name << " fetches the " << item << "!" << endl;
    }
};

void Ex56() {
    cout << "\n[56] Dog Demo\n";
    string n, b, it;
    int a;
    cout << "Enter dog name: ";
    getline(cin, n);
    cout << "Enter breed: ";
    getline(cin, b);
    cout << "Enter age: ";
    cin >> a;
    cin.ignore();
    cout << "Enter item to fetch: ";
    getline(cin, it);

    Dog d(n, b, a);
    d.bark();
    d.fetch(it);
}

class FastFood {
public:
    string restaurant; // restaurant name
    string popularItem; // best-selling menu item
    int rating; // rating 1-5

    FastFood(string r, string item, int rt) {
        restaurant = r;
        popularItem = item;
        rating = rt;
    }

    void order() {
        cout << "You ordered the popular " << popularItem << " from " << restaurant << "." << endl;
    }

    void rate(int r) {
        rating = r;
        cout << restaurant << " is now rated " << rating << "/5." << endl;
    }
};

void Ex57() {
    cout << "\n[57] Fast Food Demo\n";
    string r, item;
    int rt, newR;
    cout << "Enter restaurant name: ";
    getline(cin, r);
    cout << "Enter popular item: ";
    getline(cin, item);
    cout << "Enter initial rating (1-5): ";
    cin >> rt;
    FastFood ff(r, item, rt);
    ff.order();
    cout << "Update rating (1-5): ";
    cin >> newR;
    ff.rate(newR);
    cin.ignore();
}


class Rectangle {
public:
    int width; //  width
    int height; //height

    Rectangle(int w, int h) {
        width = w;
        height = h;
    }

    void area() {
        cout << "Area: " << (width * height) << endl;
    }

    void perimeter() {
        cout << "Perimeter: " << (2 * (width + height)) << endl;
    }
};

void Ex58() {
    cout << "\n[58] Rectangle Demo\n";
    int w, h;
    cout << "Enter width: ";
    cin >> w;
    cout << "Enter height: ";
    cin >> h;
    Rectangle r(w, h);
    r.area();
    r.perimeter();
    cin.ignore();
}

class DancingRobot {
public:
    string model; //robot model
    int energy; //energy 0-100

    DancingRobot(string m, int e) {
        model = m;
        energy = e;
    }

    void dance() {
        if (energy >= 10) {
            cout << model << " performs a cool dance routine!" << endl;
            energy -= 10;
        }
        else {
            cout << model << " is too low on energy to dance." << endl;
        }
    }

    void recharge() {
        energy = 100;
        cout << model << " is fully recharged!" << endl;
    }
};

void Ex59() {
    cout << "\n[59] Dancing Robot Demo\n";
    string m;
    int e;
    cout << "Enter robot model: ";
    getline(cin, m);
    cout << "Enter starting energy (0-100): ";
    cin >> e;
    DancingRobot dr(m, e);
    dr.dance();
    cout << "Recharge? (1=yes,0=no): ";
    int ch;
    cin >> ch;
    if (ch == 1) dr.recharge();
    dr.dance();
    cin.ignore();
}


class Superhero {
public:
    string name; // superhero name
    string superpower; // power
    int energy; // energy level (0-100)

    Superhero(string n, string power, int e) {
        name = n;
        superpower = power;
        energy = e;
    }

    void useSuperpower() {
        if (energy >= 10) {
            energy -= 10;
            cout << name << " uses " << superpower << "!" << endl;
            cout << "\nRemaining energy: " << energy;
        }
        else {
            cout << "No enough energy to use superpower\n";
        }
    }

    void recharge() {
        energy = 100;
        cout << "\nEnergy has been fully recharged\n";
    }
};

void Ex60() {
    cout << "\n[60] Superhero Demo\n";
    string n, p;
    int e;
    cout << "Enter name: ";
    getline(cin, n);
    cout << "Enter superpower: ";
    getline(cin, p);
    cout << "Enter energy: ";
    cin >> e;
    Superhero h(n, p, e);
    h.useSuperpower();
    cout << "\nRecharge? (1=yes,0=no): ";
    int ch;
    cin >> ch;
    if (ch == 1) h.recharge();
    cin.ignore();
}




class Monster {
public:
    string type; // type of monster
    int scariness; // scariness level
    bool isFriendly; // friendly?

    Monster(string t, int scary, bool fr) {
        type = t;
        scariness = scary;
        isFriendly = fr;
    }

    void roar() {
        if (isFriendly) cout << "The " << type << " monster makes a friendly growl!" << endl;
        else cout << "The " << type << " monster roars scarily!" << endl;
    }
};

void Ex61() {
    cout << "\n[61] Monster Demo\n";
    string t;
    int s;
    int fr;
    cout << "Enter monster type: ";
    getline(cin, t);
    cout << "Enter scariness (0-10): ";
    cin >> s;
    cout << "Is it friendly? (1=yes,0=no): ";
    cin >> fr;
    Monster m(t, s, fr == 1);
    m.roar();
    cin.ignore();
}

class Treasure {
public:
    string item; //treasure item
    int value; // value in coins
    bool isLocked; // locked?

    Treasure(string i, int val, bool locked) {
        item = i;
        value = val;
        isLocked = locked;
    }

    void open() {
        if (isLocked) cout << "The " << item << " is locked! Find the key first!" << endl;
        else cout << "You open the " << item << " and find " << value << " gold coins!" << endl;
    }

    void unlock() {
        isLocked = false;
        cout << "You unlocked the " << item << "!" << endl;
    }
};

void Ex62() {
    cout << "\n[62] Treasure Demo\n";
    string i;
    int v;
    int l;
    cout << "Enter treasure item: ";
    getline(cin, i);
    cout << "Enter value: ";
    cin >> v;
    cout << "Locked? (1=yes,0=no): ";
    cin >> l;
    Treasure tr(i, v, l == 1);
    tr.open();
    cout << "Try unlock? (1=yes,0=no): ";
    int u;
    cin >> u;
    if (u == 1)
    {
        tr.unlock();
        tr.open();
    }
    cin.ignore();
}


class BankAccount {
public:
    string owner; //account owner
    float balance; // balance

    BankAccount(string o, float b) {
        owner = o;
        balance = b;
    }

    void deposit(float amt) {
        balance += amt;
        cout << owner << " deposited $" << amt << ". New balance: $" << balance << endl;
    }

    void withdraw(float amt) {
        if (amt > balance) cout << "Insufficient funds!" << endl;
        else { balance -= amt; cout << owner << " withdrew $" << amt << ". New balance: $" << balance << endl; }
    }

    void showBalance() {
        cout << owner << "'s balance: $" << balance << endl;
    }
};

void Ex63() {
    cout << "\n[63] Bank Account Demo\n";
    string o;
    float b, d, w;
    cout << "Enter owner name: ";
    getline(cin, o);
    cout << "Enter starting balance: ";
    cin >> b;
    BankAccount acc(o, b);
    acc.showBalance();
    cout << "Enter deposit amount: ";
    cin >> d; acc.deposit(d);
    cout << "Enter withdraw amount: ";
    cin >> w; acc.withdraw(w);
    acc.showBalance();
    cin.ignore();
}

class Employee {
public:
    string name; // employee name
    string role; //job role
    float salary; // salary

    Employee(string n, string r, float s) {
        name = n;
        role = r;
        salary = s;
    }

    void work() {
        cout << name << " works as a " << role << "." << endl;
    }

    void giveRaise(float amt) {
        salary += amt;
        cout << name << " received a raise. New salary: $" << salary << endl;
    }
};

void Ex64() {
    cout << "\n[64] Employee Demo\n";
    string n, r;
    float s, raiseAmt;
    cout << "Enter name: ";
    getline(cin, n);
    cout << "Enter role: ";
    getline(cin, r);
    cout << "Enter salary: ";
    cin >> s;
    Employee e(n, r, s);
    e.work();
    cout << "Enter raise amount: ";
    cin >> raiseAmt;
    e.giveRaise(raiseAmt);
    cin.ignore();
}

class Movie {
public:
    string title; //movie title
    string genre; //genre
    int duration; // minutes

    Movie(string t, string g, int d) {
        title = t;
        genre = g;
        duration = d;
    }

    void play() {
        cout << "Now playing \"" << title << "\" (" << genre << ", " << duration << " min)." << endl;
    }

    void rate(int stars) {
        cout << "You rated \"" << title << "\" " << stars << "/5 stars." << endl;
    }
};

void Ex65() {
    cout << "\n[65] Movie Demo\n";
    string t, g;
    int d, stars;
    cout << "Enter title: ";
    getline(cin, t);
    cout << "Enter genre: ";
    getline(cin, g);
    cout << "Enter duration (minutes): ";
    cin >> d;
    Movie m(t, g, d);
    m.play();
    cout << "Enter your rating (1-5): ";
    cin >> stars;
    m.rate(stars);
    cin.ignore();
}


class Game {
public:
    string fighter1; // first character name
    string fighter2; // second character name
    int hp1; // health for fighter 1
    int hp2; // health for fighter 2
    int damage; // base damage per hit

    Game(string f1, string f2, int h1, int h2, int dmg) {
        fighter1 = f1;
        fighter2 = f2;
        hp1 = h1;
        hp2 = h2;
        damage = dmg;
    }

    void attack1to2() {
        if (hp2 > 0) {
            hp2 -= damage;
            if (hp2 < 0) hp2 = 0;
            cout << fighter1 << " hits " << fighter2 << " for " << damage << " damage. " << fighter2 << " HP: " << hp2 << endl;
        }
    }

    void attack2to1() {
        if (hp1 > 0) {
            hp1 -= damage;
            if (hp1 < 0) hp1 = 0;
            cout << fighter2 << " hits " << fighter1 << " for " << damage << " damage. " << fighter1 << " HP: " << hp1 << endl;
        }
    }

    void showStatus() {
        cout << fighter1 << " HP: " << hp1 << " | " << fighter2 << " HP: " << hp2 << endl;
    }
};

void Ex66() {
    cout << "\n[66] Game Demo (Simple Fighting)\n";
    string f1, f2;
    int h1, h2, dmg;
    cout << "Enter fighter 1 name: ";
    getline(cin, f1);
    cout << "Enter fighter 2 name: ";
    getline(cin, f2);
    cout << "Enter fighter 1 HP: ";
    cin >> h1;
    cout << "Enter fighter 2 HP: ";
    cin >> h2;
    cout << "Enter base damage per hit: ";
    cin >> dmg;

    Game g(f1, f2, h1, h2, dmg);
    g.showStatus();

    cout << "Simulate round: 1 attacks 2 then 2 attacks 1." << endl;
    g.attack1to2();
    if (h2 - dmg > 0) g.attack2to1();
    g.showStatus();
    cin.ignore();
}