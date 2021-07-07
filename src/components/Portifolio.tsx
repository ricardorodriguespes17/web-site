import Section from "./Section";
import { useEffect } from "react";
import { useState } from "react";
import { GoRepo } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { githubApi } from "../services/api";

import styles from "../styles/components/Portifolio.module.css";
import { BsArrowRightShort } from "react-icons/bs";

interface RepoType {
  id: string;
  name: string;
  description: string;
  html_url: string;
  size: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

interface UserType {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  location: string;
  html_url: string;
}

export default function Portifolio() {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    loadUser();
    loadRepos();
  }, []);

  function loadUser() {
    githubApi
      .get("users/ricardorodriguespes17")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  function loadRepos() {
    githubApi
      .get("users/ricardorodriguespes17/repos")
      .then((res) => {
        const repos = res.data as RepoType[];

        setRepos(
          repos
            .sort(
              (a, b) =>
                new Date(b.pushed_at).getTime() -
                new Date(a.pushed_at).getTime()
            )
            .slice(0, 6)
        );
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  return (
    <Section
      id="portifolio"
      title="Portifólio"
      description="Meu portifólio no Github"
    >
      <div className={styles.content}>
        {user && (
          <div className={styles.header}>
            <img src={user.avatar_url} alt={user.name} />

            <div className={styles.details}>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>

            <div className={styles.otherData}>
              <p>
                <MdLocationOn /> {user.location}
              </p>
              <p>{user.public_repos} repositórios públicos</p>
            </div>
          </div>
        )}
        <div className={styles.repos}>
          {repos.map((item) => {
            return (
              <div className={styles.item} key={item.id}>
                <a
                  target="_blank"
                  href={item.html_url}
                  className={styles.title}
                >
                  <GoRepo />
                  {item.name}
                </a>
                <p className={styles.description}>{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <p className={styles.credits}>Integrado com a API do Github</p>
          {user && (
            <a target="_blank" href={user.html_url}>
              Ver mais
              <BsArrowRightShort className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
