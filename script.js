document.addEventListener('DOMContentLoaded', function() {
    // Code for the first dropdown
    var dropdown = document.querySelector('.custom-dropdown .custom-select');
    var options = document.querySelector('.custom-dropdown .custom-options');

    dropdown.onclick = function() {
        // This logic ensures that when one dropdown is opened, the others close.
        var currentlyVisible = options.style.display === 'block';
        // Close all options first
        document.querySelectorAll('.custom-dropdown .custom-options').forEach(function(opt){
            opt.style.display = 'none';
        });
        // Toggle the current one's visibility
        options.style.display = currentlyVisible ? 'none' : 'block';
    };

    document.querySelectorAll('.custom-dropdown .option').forEach(function(item) {
        item.onclick = function() {
            dropdown.textContent = this.textContent;
            options.style.display = 'none';
        }
    });

    // Code for the searchable dropdown
    var searchBox = document.querySelector('.searchable-dropdown .search-box');
    var optionsContainer = document.querySelector('.searchable-dropdown .searchable-options');
    var optionsList = document.querySelectorAll('.searchable-dropdown .searchable-option');

    searchBox.onfocus = function() {
        optionsContainer.style.display = 'block';
    };

    searchBox.onkeyup = function() {
        var filter = searchBox.value.toLowerCase();
        optionsList.forEach(function(option) {
            var text = option.textContent;
            var match = text.toLowerCase().indexOf(filter) > -1;
            option.style.display = match ? 'block' : 'none';
        });
    };

    optionsList.forEach(function(option) {
        option.onclick = function() {
            searchBox.value = this.textContent;
            optionsContainer.style.display = 'none';
        };
    });

    // General click outside logic for both dropdowns
    window.onclick = function(event) {
        if (!event.target.matches('.custom-select') && !event.target.matches('.search-box') && !event.target.matches('.option') && !event.target.matches('.searchable-option')) {
            var dropdowns = document.querySelectorAll('.custom-dropdown .custom-options, .searchable-dropdown .searchable-options');
            dropdowns.forEach(function(dropdown) {
                dropdown.style.display = 'none';
            });
        }
    };
});
