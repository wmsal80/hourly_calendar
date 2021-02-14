$(document).ready(function(){
    const date = new Date();
    const hour = date.getHours();
    const todo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : {}

    //function that appends the timeblocks dynamically onto the page
    function appendHours(){
        for (let i = 7; i < 21; i++) {
              $(".container").append(`
        <div class="row time-block">
        <div class="col-2 hour">
          ${i<12 ? (i+" AM") : i> 12 ? (i-12 + " PM") : "12 PM"}
        </div>
        <textarea rows="3" class="description ${i<hour ? "past" : i> hour ? "future" : "present"} col-8">${todo[i] || ""}</textarea>
        <button class="saveBtn" id=${i}> Save</button>
      </div>
        `)
        }
    }

    appendHours()
    
    $("button").on("click",function(){
       var text = $(this).siblings("textarea").val().trim();
       var id = $(this).attr("id");
        console.log(text);
    todo[id] = text;
    localStorage.setItem("todo", JSON.stringify(todo))
    })
})