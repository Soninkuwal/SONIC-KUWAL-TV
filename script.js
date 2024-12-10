function filterChannels() {
            var selectedGroup = document.getElementById('group-select').value;
            var channels = document.querySelectorAll('.directory-item');
            
            channels.forEach(function(channel) {
                if (selectedGroup === 'all' || channel.getAttribute('data-group') === selectedGroup) {
                    channel.style.display = 'block';
                } else {
                    channel.style.display = 'none';
                }
            });
        }

        function searchChannels() {
            var input = document.getElementById('search-input').value.toLowerCase();
            var channels = document.querySelectorAll('.directory-item');
            
            channels.forEach(function(channel) {
                var name = channel.getAttribute('data-name').toLowerCase();
                if (name.includes(input)) {
                    channel.style.display = 'block';
                } else {
                    channel.style.display = 'none';
                }
            });
        }

        const checkbox = document.getElementById("checkbox");
        checkbox.addEventListener("change", () => {
            document.body.classList.toggle("dark-mode");
        });
