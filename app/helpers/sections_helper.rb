module SectionsHelper

  def show_owned_tags(section)
    section.owned_tags.each do |tag|
      content_tag(:h1, tag.name, class: "ownedTag")


    end
  end

end
