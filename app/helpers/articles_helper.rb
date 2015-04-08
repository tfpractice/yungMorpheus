module ArticlesHelper


def article_path(article)
  # every article record should have a reference to its parent project
  section_article_path(article.section_id, article)
end
end
