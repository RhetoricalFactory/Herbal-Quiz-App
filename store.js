//This is where all the content for the questions screen is stored including the image, the question and the correct answer.
const STORE = {
    questions: [ {
        image: `<div> <img  class="drawing" src="nettles3.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which plant provides the most minerals and nutrients?",
            responses: [
                "Licorice <i>Glycyrrhiza glabra</i><br>",
                "Jiagulon <i>Gynostemma pentaphyllum</i><br>",
                "Lemon Balm <i>Melissa Officianlis</i><br>",
                "Nettles <i>Urtica dioica</i><br>"
            ],
            answer: "Nettles <i>Urtica dioica</i><br>",
            questionNumber: "1"
        },
        {
            image: `<div> <img class="drawing" src="jiagulon1.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which Plant is known for improving heart function and preventing hair loss?",
            responses: [
                "Jiagulon <i>Gynostemma pentaphyllum</i><br>",
                "Licorice <i>Glycyrrhiza glabra</i><br>",
                "Nettles <i>Urtica dioica</i><br>",
                "Lemon Balm <i>Melissa Officianlis</i><br>"
            ],
            answer: "Jiagulon <i>Gynostemma pentaphyllum</i><br>",
            questionNumber: "2"
        },
        {
            image: `<div> <img id="licorice" class="drawing" src="licorice6.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which plant is best known for helping with digestive issues?",
            responses: [
                "Lemon Balm <i>Melissa Officianlis</i><br>",
                "Jiagulon <i>Gynostemma pentaphyllum</i><br>",
                "Nettles <i>Urtica dioica</i><br>",
                "Licorice <i>Glycyrrhiza glabra</i><br>",

            ],
            answer: "Licorice <i>Glycyrrhiza glabra</i><br>",
            questionNumber: "3"
        },
        {
            image:`<div> <img class="drawing" id="lemonBalm" src="lemonbalm5.png", alt="mystery plant illustration"> </div>`,
            questionText: "Which plant is used to help calm children?",
            responses: [
                "Jiagulon <i>Gynostemma pentaphyllum</i><br>",
                "Lemon Balm <i>Melissa Officianlis</i><br>",
                "Nettles <i>Urtica dioica</i><br>",
                "Licorice <i>Glycyrrhiza glabra</i><br>",

            ],
            answer: "Lemon Balm <i>Melissa Officianlis</i><br>",
            questionNumber: "4"
            
        },
        {
            image: `<div> <img class="drawing" src="nettles3.png", alt="mystery plant illustration"> </div>`,
            questionText: "What do MOST adaptogens have in common?",
            responses: [
                "There is GENERALLY no known unsafe dosage",
                "They can be combined with MOST medications without negative effects",
                "They help the body adapt to stress on physical, emotional and mental levels",
                "All of the above",
            ],
            answer: "All of the above",
            questionNumber: "5"
            
        },
        {
            image: `<div> <img class="drawing" src="nettles3.png", alt="mystery plant illustration"> </div>`,
        questionText: "What does “Officianalis” mean when it’s in a botanical name?",
            responses: [
                "Someone famous named it",
                "It’s used in pharmaceutical medicine",
                "The plant was discovered in the 18th century",
                "All of the above",
            ],
            answer: "It’s used in pharmaceutical medicine",
            questionNumber: "6"
        },
        {
            image: `<div> <img class="drawing" img src="nettles3.png", alt="mystery plant illustration"> </div>`,
            questionText: "When should inexperienced users consult a physician before using herbs for medicinal purposes?"
            ,
                responses: [
                    "Only if they are taking other medications",
                    "Only when pregnant or breast feeding",
                    "Only when treating children",
                    "Always"

                ],
                answer: "Always",
                questionNumber: "7"
            },


    ]
}
