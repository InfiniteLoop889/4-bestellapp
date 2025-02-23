import os


def save_filenames_to_txt(folder_path, output_file):
    # Get list of files in the specified folder
    filenames = os.listdir(folder_path)

    # Filter out directories, only keep files
    filenames = [f for f in filenames if os.path.isfile(os.path.join(folder_path, f))]

    # Format filenames with quotation marks and commas
    formatted_filenames = ",".join(f'"{filename}"' for filename in filenames)

    # Write the formatted filenames to the output file
    with open(output_file, "w") as file:
        file.write(formatted_filenames)


# Example usage
folder_path = "C:/Users/Marc/OneDrive/Programming/Developer Akademie/Projekte/2-fotogram/fotogram/img"
output_file = "C:/Users/Marc/OneDrive/Programming/Developer Akademie/Projekte/2-fotogram/fotogram/filenames.txt"
save_filenames_to_txt(folder_path, output_file)
